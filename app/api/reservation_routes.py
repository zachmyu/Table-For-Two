from flask import Blueprint, jsonify, request
from app.models import Reservation, User, db
from app.forms import ReservationForm


reservation_routes = Blueprint('reservations', __name__)

@reservation_routes.route('/<int:id>')
def reservation(id):
    reservations = Reservation.query.filter_by(user_id=id).all()
    return jsonify({"reservations": [reservation.to_dict() for reservation in reservations]})



@reservation_routes.route('/', methods=['POST'])
def postReservation():
    # form = ReservationForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # reservation = Reservation(
    #     user_id = form.data['user_id'],
    #     venue_id = form.data['venue_id'],
    #     reservation_datetime = form.data['reservation_datetime'],
    #     party_size = form.data['party_size'],
    #     duration = form.data['duration']
    # )
    # db.session.add(reservation)
    # db.session.commit()
    # return {}
    # data = request.json
    request_json = request.get_json()['reservation']
    reservation = Reservation(
        user_id = request_json['user_id'],
        venue_id = request_json['venue_id'],
        reservation_datetime = request_json['reservation_datetime'],
        party_size = request_json['party_size'],
        duration = request_json['duration']
    )
    db.session.add(reservation)
    db.session.commit()
    return request.get_json()

