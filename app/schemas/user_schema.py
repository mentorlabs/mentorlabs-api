from app import ma
from app.models.user import User

class UserSchema(ma.ModelSchema):
    class Meta:
        model = User