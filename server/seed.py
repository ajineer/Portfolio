from app import app
from models import db, User, Project

if __name__ == '__main__':
    with app.app_context():
        session = db.session
        Project.query.delete()
        User.query.delete()
        db.session.commit()