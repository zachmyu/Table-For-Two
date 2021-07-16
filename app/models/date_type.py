from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Date_type(db.Model, UserMixin):
    __tablename__ = 'date_types'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(40), nullable=False, unique=True)

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type
        }
