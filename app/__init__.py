from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt

from config import Config

app = Flask(__name__)
app.config.from_object(Config)
bcrypt = Bcrypt(app)
db = SQLAlchemy(app)
ma = Marshmallow(app)
migrate = Migrate(app, db)

@app.before_first_request
def initialize_database():
    db.create_all()

from app.api import bp as api_bp
app.register_blueprint(api_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run()