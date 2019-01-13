from app import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(128), index=True, unique=True)
    password = db.Column(db.String(128)) # needs encryption
    # task relationship
    # project relationship
    # comment relationship
    # badges relationship