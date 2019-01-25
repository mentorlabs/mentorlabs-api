from app import db


class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(128), index=True, unique=True)
    # project relationship