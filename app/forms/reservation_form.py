from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField, FloatField
from wtforms.validators import DataRequired


class ReservationForm(FlaskForm):
    user_id = IntegerField('user')
    venue_id = IntegerField('venue')
    reservation_datetime = DateField('date', validators=[DataRequired()])
    party_size = IntegerField('party size', validators=[DataRequired()])
    duration = FloatField('duration', validators=[DataRequired()])