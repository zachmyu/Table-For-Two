from .db import db
from flask_login import UserMixin


class Reservation(db.Model, UserMixin):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
    venue_id = db.Column(db.Integer, db.ForeignKey(
        'venues.id'), nullable=False)
    reservation_datetime = db.Column(db.DateTime, nullable=False)
    party_size = db.Column(db.Integer, nullable=False)
    duration = db.Column(db.Float, nullable=False)
    
    user = db.relationship('User', back_populates='reservations')
    venue = db.relationship('Venue', back_populates='reservations')
    

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'venue_id': self.venue_id,
            'reservation_datetime': self.reservation_datetime,
            'party_size': self.party_size,
            'duration': self.duration,
        }
