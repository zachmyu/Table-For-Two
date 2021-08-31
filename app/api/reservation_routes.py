from flask import Blueprint, jsonify, request
from app.models import Reservation, db, Venue
from flask_login import login_required
from app.forms import ReservationForm


reservation_routes = Blueprint('reservations', __name__)


# Read One User Reservation
@reservation_routes.route('/<int:id>')
def reservation(id):
    reservation = Reservation.query.get(id)
    return reservation.to_dict()


# Read All User Reservations
@reservation_routes.route('/user/<int:id>')
@login_required
def user_reservation(id):
    reservations = Reservation.query.filter_by(user_id=id).all()
    return {"reservations": [reservation.to_dict() for reservation in reservations]}


# Create User Reservation
@reservation_routes.route('/create/', methods=['POST'])
@login_required
def postReservation():
    request_json = request.get_json()
    reservation = Reservation(
        user_id=request_json['user_id'],
        venue_id=request_json['venue_id'],
        reservation_datetime=request_json['reservation_datetime'],
        party_size=request_json['party_size'],
        duration=request_json['duration']
    )
    db.session.add(reservation)
    db.session.commit()
    return request.get_json()


# Edit User Reservation
@reservation_routes.route('/<int:id>/', methods=['PUT'])
@login_required
def updateReservation(id):
    form = ReservationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_reservation = Reservation.query.get(id)
        form.populate_obj(edit_reservation)
        db.session.commit()
        return edit_reservation.to_dict()
    return {'errors': form.errors}


# Delete User Reservation
@reservation_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def delete_reservation_by_id(id):
    delete_reservation = Reservation.query.get(id)
    db.session.delete(delete_reservation)
    db.session.commit()
    return {'delete_reservation', delete_reservation.to_dict()}
