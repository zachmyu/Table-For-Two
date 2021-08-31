from flask import Blueprint, request, jsonify
from app.models import Favorite, db
from flask_login import login_required
favorite_routes = Blueprint('favorites', __name__)


def validation_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# Read One User Favorite
@favorite_routes.route('/<int:id>/')
def favorite(id):
    favorite = Favorite.query.get(id)
    return favorite.to_dict()


# Read all User Favorites
@favorite_routes.route('/<int:id>/')
@login_required
def user_favorites(id):
    favorites = Favorite.query.filter_by(user_id=id).all()
    return {"favorites": [favorite.to_dict() for favorite in favorites]}


# Create New User Favorite
@favorite_routes.route('/create/', methods=['POST'])
@login_required
def postFavorite():
    request_json = request.get_json()
    favorite = Favorite(
        user_id=request_json['user_id'],
        venue_id=request_json['venue_id']
    )
    db.session.add(favorite)
    db.session.commit()
    return request.get_json()


# Delete User Favorite
@favorite_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def delete_favorite_by_id(id):
    delete_favorite = Favorite.query.get(id)
    db.session.delete(delete_favorite)
    db.session.commit()
    return {"delete_favorite": delete_favorite.to_dict()}
