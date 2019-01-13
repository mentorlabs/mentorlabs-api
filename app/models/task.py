from app import db


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(128))
    completed = db.Column(db.Boolean, default=False, nullable=False)
    # user relationship
    # project relationship
    # comment relationship