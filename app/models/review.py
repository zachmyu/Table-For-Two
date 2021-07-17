from .db import db
from flask_login import UserMixin


class Review(db.Model, UserMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
    venue_id = db.Column(db.Integer, db.ForeignKey(
        'venues.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    body = db.Column(db.Text(4000), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'venue_id': self.venue_id,
            'title': self.title,
            'body': self.body,
            'rating': self.rating
        }
