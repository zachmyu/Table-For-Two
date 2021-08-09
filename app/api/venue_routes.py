from flask import Blueprint
# from flask import request, jsonify
# from flask_login import current_user
from app.models import Venue
# from app.models import Review, db
# from app.forms import ReviewForm

venue_routes = Blueprint('venues', __name__)


def validation_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@venue_routes.route('/')
def venues():
    venues = Venue.query.all()
    return {"venues": [venue.to_dict() for venue in venues]}


@venue_routes.route('/<int:id>/')
def venue(id):
    venue = Venue.query.get(id)
    return venue.to_dict()
