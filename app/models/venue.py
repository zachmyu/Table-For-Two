from .db import db
from flask_login import UserMixin


class Venue(db.Model, UserMixin):
    __tablename__ = 'venues'

    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String(40), nullable=False, unique=True)
    date_type_id = db.Column(db.Integer, db.ForeignKey(
        'date_types.id'), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String(255))
    phone_number = db.Column(db.String(255))
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(25), nullable=False)
    zipcode = db.Column(db.String(10), nullable=False)
    operation_hours = db.Column(db.String(255), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)

    user = db.relationship('User', back_populates='venues')
    date_type = db.relationship('Date_type', back_populates='venues')
    reviews = db.relationship('Review', back_populates='venue')
    reservations = db.relationship('Reservation', back_populates='venue')
    favorites = db.relationship("Favorite", back_populates="venue")

    def to_dict(self):
        return {
            'id': self.id,
            'creator_id': self.creator_id,
            'username': self.name,
            'name': self.name,
            'price': self.price,
            'date_type_id': self.date_type_id,
            'description': self.description,
            'image_url': self.image_url,
            'phone_number': self.phone_number,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'zipcode': self.zipcode,
            'operation_hours': self.operation_hours,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "reviews": {review.id: review.to_dict() for review in self.reviews},
            "favorites": {favorite.id: favorite.to_dict() for favorite in self.favorites}
        }
