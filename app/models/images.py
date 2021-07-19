from .db import db

class Image(db.Model):
    __tablename__ = 'images'
    
    id = db.Column(db.Integer, primary_key=True)
    profile_image_url = db.Column(db.String(1000), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    user = db.relationship('User', back_populates='images')
    
    def to_dict(self):
        return {
            "id": self.id,
            "profile_image_url": self.profile_image_url
        }