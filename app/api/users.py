from flask import jsonify, request

from app.api import bp
from app.models.user import User
from app.schemas.user_schema import UserSchema


users_schema = UserSchema(many=True)
user_schema = UserSchema()

@bp.route('/users', methods=['GET'])
def get_users():
    """
    Returns a list of users
    ---
    definitions:
      Users:
          type: array
          items:
            $ref: '#/definitions/User'
          
    responses:
      200:
          description: Returns a list of all users
          schema:
            $ref: '#/definitions/Users'
    """
    data = User.query.all()
    users = users_schema.dump(data).data

    return jsonify({'users': users})

@bp.route('/users', methods=['POST'])
def create_user():
    """
    Create a new user
    ---
    parameters:
      - name: username
        type: string
        required: true
        in: body
        description: a unique name used to identify the user
        example: BigJohn
      - name: password
        type: string
        in: body
        required: true
        description: the users password
        example: JohnsPassword123
      - name: email
        type: string
        in: body
        required: true
        description: a unique email used to identify the user
        example: john@gmail.com
    definitions:      
      User:
        type: object
        properties:
          username:
            type: string
          password:
            type: string
          email:
            type: string
    responses:
      201:
          description: Creates a new unique user
          schema:
            $ref: '#/definitions/User'
    """
    data = request.get_json()
    user = user_schema.load(data).data
    user.set_password(data['password'])
    user.save()

    user = user_schema.dump(user).data

    return jsonify({'user': user}), 201

@bp.route('/users/<id>', methods=['GET'])
def get_single_user(id):
    """
    Returns a single of user by id
    ---
    parameters:
      - name: id
        type: string
        in: path
        description: A unique identifier used to locate the user
    responses:
      200:
        description: Returns a single user
        schema:
          $ref: '#/definitions/User'
      404:
        description: A user with specified ID was not found 
    """
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
    """
    Deletes a single user
    ---
    parameters:
      - name: id
        type: string
        in: path
        description: The unique identifier of the user
    responses:
      200:
        description: User successfully deleted
      404:
        description: A user with specified ID was not found
    """
    user = User.query.get(id)

    if user is None:
        return jsonify({'error': 'User not found'}), 404

    user.delete()

    return jsonify({'success': 'User successfully deleted'}), 200