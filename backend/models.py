from exts import db
from flask import current_app

class Plant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    photo = db.Column(db.String(255), nullable=False, default='default.jpg')

    def __repr__(self):
        return f"<Plant {self.name} >"
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self, name):
        self.name=name
        db.session.commit()
    
    def image_url(self):
        return current_app.config['UPLOAD_FOLDER'] + '/' + self.photo 