from flask import Blueprint, jsonify, request
from app.models import Reservation, db, Venue
from app.forms import ReservationForm


reservation_routes = Blueprint('reservations', __name__)

@reservation_routes.route('/<int:id>')
def reservation(id):
    reservations = Reservation.query.filter_by(user_id=id).all()
    reservation_data = [reservation.to_dict() for reservation in reservations]
    venue = Venue.query.join(Reservation).filter(Venue.id==Reservation.venue_id).first()
    venues = venue.to_dict()
    return jsonify(reservation_data, {"venues": venues})


@reservation_routes.route('/', methods=['POST'])
def postReservation():
    request_json = request.get_json()
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


@reservation_routes.route('/<int:id>/', methods=['PUT'])
def updateReservation(id):
    form = ReservationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_reservation = Reservation.query.get(id)
        form.populate_obj(edit_reservation)
        db.session.commit()
        return edit_reservation.to_dict()
    return {'errors': form.errors}


@reservation_routes.route('/<int:id>/', methods=['DELETE'])
def delete_reservation_by_id(id):
    delete_reservation = Reservation.query.filter.get(id)
    db.session.delete(delete_reservation)
    db.session.commit()
    return {'delete_reservation', delete_reservation.to_dict()}
