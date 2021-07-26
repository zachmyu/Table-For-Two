from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_image_url = db.Column(db.String(1000))
    # profileImg = db.Column(db.String, nullable=False)

    images = db.relationship("Image", back_populates="user")
    venues = db.relationship("Venue", back_populates="user")
    reviews = db.relationship("Review", back_populates="user")
    reservations = db.relationship("Reservation", back_populates="user")
    favorites = db.relationship("Favorite", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'email': self.email,
            'profile_image_url': self.profile_image_url,
            "reservations": {reservation.id: reservation.to_dict() for reservation in self.reservations},
            "favorites": {favorite.id: favorite.to_dict() for favorite in self.favorites},
            "reviews": {review.id: review.to_dict() for review in self.reviews}
        }
