from .db import db
from flask_login import UserMixin


class Favorite(db.Model, UserMixin):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
    venue_id = db.Column(db.Integer, db.ForeignKey(
        'venues.id'), nullable=False)
    
    user = db.relationship('User', back_populates='favorites')
    venue = db.relationship('Venue', back_populates='favorites')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'venue_id': self.venue_id
        }
