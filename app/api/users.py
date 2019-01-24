from flask import jsonify, request

from app.api import bp
from app.models.user import User
from app.schemas.user_schema import UserSchema


users_schema = UserSchema(many=True)
user_schema = UserSchema()

@bp.route('/users', methods=['GET'])
def get_users():
    data = User.query.all()
    users = users_schema.dump(data).data

    return jsonify({'users': users})

@bp.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = user_schema.load(data).data
    user.set_password(data['password'])
    user.save()

    user = user_schema.dump(user).data

    return jsonify({'user': user}), 201

@bp.route('/users/<id>', methods=['GET'])
def get_single_user(id):
    data = User.query.get(id)

    if data is None:
        return jsonify({'error': 'User not found'}), 404

    user = user_schema.dump(data).data

    return jsonify({'user': user})

@bp.route('/users/<id>', methods=['PUT'])
def update_user():
    pass


@bp.route('/users/<id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)

    if user is None:
        return jsonify({'error': 'User not found'}), 404

    user.delete()

    return jsonify({'success': 'User successfully deleted'}), 201