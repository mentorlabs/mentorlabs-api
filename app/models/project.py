from app import db


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), index=True, unique=True)
    description = db.Column(db.String(128)) # needs encryption
    # technology relationship
    # steps relationship
    # users relationship
    # comment relationship