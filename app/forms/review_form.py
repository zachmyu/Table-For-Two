from flask_wtf import FlaskForm
from wtforms import StringField, RadioField, HiddenField, TextAreaField
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    user_id = HiddenField('User_Id')
    venue_id = HiddenField('Venue_Id')
    title = StringField('Title', validators=[DataRequired()])
    body = TextAreaField('Body', validators=[DataRequired()])
    rating = RadioField('Rating', validators=[DataRequired()],
                        choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')])
