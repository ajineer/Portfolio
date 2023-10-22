from app import app
from models import db, User, Project, project_skill

if __name__ == '__main__':
    with app.app_context():
        session = db.session
        session.query(project_skill).delete()
        Project.query.delete()
        # User.query.delete()
        db.session.commit()