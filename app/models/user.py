from app import db
from app import bcrypt


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(128), index=True, unique=True)
    email = db.Column(db.String(128), index=True, unique=True)
    password = db.Column(db.String(128)) # needs encryption
    # task relationship
    # project relationship
    # comment relationship
    # badges relationship

    def set_password(self, password):
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

    def authenticate(self, credentials):
        return bcrypt.check_password_hash(self.password, credentials)

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()