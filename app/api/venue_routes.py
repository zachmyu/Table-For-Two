from flask import Blueprint, jsonify, request
from flask_login import login_required

from app.models import Venue

venue_routes = Blueprint('venues', __name__)


@venue_routes.route('/')
def venues():
    venues = Venue.query.all()
    print('???????????????', venues)
    return {"venues": [venue.to_dict() for venue in venues]}


@venue_routes.route('/<int:id>')
def venue(id):
    venue = Venue.query.get(id)
    return venue.to_dict()