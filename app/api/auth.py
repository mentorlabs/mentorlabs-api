from flask import request, jsonify
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from app.api import bp
from app.models.user import User
from app.schemas.user_schema import UserSchema


user_schema = UserSchema()

@bp.route('/login', methods=['POST'])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify(message='Invalid credentials'), 403

    authenticated = user.authenticate(password)

    if not authenticated:
        return jsonify(message='Invalid credentials'), 403

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)


@bp.route('/protected', methods=['GET'])
@jwt_required
def protected_test():
    current_user = get_jwt_identity()
    return jsonify(current_user=current_user)