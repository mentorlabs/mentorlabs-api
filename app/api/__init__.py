from flask import Blueprint

bp = Blueprint('api', __name__)

import app.api.users
import app.api.auth