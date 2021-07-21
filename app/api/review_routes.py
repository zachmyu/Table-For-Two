from app.forms import ReviewForm
from flask import Blueprint, request, jsonify

from app.models import Review, db

review_routes = Blueprint('review_routes', __name__)


def validation_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# @review_routes.route('/<int:id>')
# def review(id):
#     review = Review.query.get(id)
#     return review.to_dict()

# @review_routes.route('/<int:id>')
# def review(id):
#     review = Review.query.filter_by(user_id=id).all()
#     return review.to_dict()


@review_routes.route('/<int:id>', methods=['PUT'])
def review_edit(id):
    review = Review.query.get(id)
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            user_id=form.data['user_id'],
            venue_id=form.data['venue_id'],
            title=form.data['title'],
            body=form.data['body'],
            rating=form.data['rating']
        )
        db.session.update(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_error_messages(form.errors)}, 401

@review_routes.route('/venues/<int:id>', methods=['POST'])
def new_review(id):
    request_json = request.get_json()
    review = Review(
        user_id=request_json["user_id"],
        venue_id=request_json["venue_id"],
        title=request_json["title"],
        body=request_json['body'],
        rating=request_json['rating']
    )
    # db.session.update(review)
    db.session.add(review)
    db.session.commit()
    return review.to_dict()
    # return {'errors': validation_error_messages(form.errors)}, 401
