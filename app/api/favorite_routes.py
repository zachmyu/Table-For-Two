from flask import Blueprint, request, jsonify

from app.models import Favorite, db, Venue

favorite_routes = Blueprint('favorites', __name__)

def validation_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@favorite_routes.route('/<int:id>')
def favorite(id):
    favorites = Favorite.query.filter_by(user_id=id).all()
    # favorite_data = [favorite.to_dict() for favorite in favorites]
    return jsonify({"favorites": [favorite.to_dict() for favorite in favorites]})
    # favorite = Favorite.query.filter_by(user_id=id).all()
    # venue_data = Venue.query.join(Favorite).filter(Favorite.venue_id == id)
    # # favorites = favorite.to_dict()
    # venues = [venue.to_dict() for venue in venue_data]
    # return jsonify({favorite, {
    #     "venues": venues
    # }})


@favorite_routes.route('/<int:id>', methods=['DELETE'])
def delete_favorite_by_id(id):
    delete_favorite = Favorite.query.get(id)
    db.session.delete(delete_favorite)
    db.session.commit()
    return {"delete_favorite", delete_favorite.to_dict()}
    

@favorite_routes.route('/', methods=['POST'])
def postFavorite():
    request_json = request.get_json()
    favorite = Favorite(
        user_id = request_json['user_id'],
        venue_id = request_json['venue_id']
    )
    db.session.add(favorite)
    db.session.commit()
    return request.get_json()