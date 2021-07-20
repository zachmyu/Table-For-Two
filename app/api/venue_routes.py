from flask import Blueprint, request
from flask_login import current_user

from app.models import Venue, Review, db
from app.forms import ReviewForm

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
    print('???????????????', venues)
    return {"venues": [venue.to_dict() for venue in venues]}


@venue_routes.route('/<int:id>')
def venue(id):
    venue = Venue.query.get(id)
    return venue.to_dict()


@venue_routes.route('/<int:id>')
def reviews(id):
    reviews = Review.query.filter_by(
        venue_id=request.args.get(id)).all()
    return {'reviews': [review.to_dict() for review in reviews]}


@venue_routes.route('/<int:id>', methods=['POST'])
def new_review(id):
    venue_id = Venue.query.get(id)
    user_id = current_user.id
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            user_id=user_id,
            venue_id=venue_id,
            title=form.data['title'],
            body=form.data['body'],
            rating=form.data['rating']
        )
        db.session.update(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_error_messages(form.errors)}, 401
