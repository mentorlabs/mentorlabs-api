from app import db


class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(128), index=True, unique=True)
    # user relationship
    # task relationship
    # idea relationship
    # project relationship