from flask import request, session
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from config import app, db, api
from models import User, Project, Skill

@app.route('/')
def index():
  return '<h1>Portfolio website</h1>'

def check_session():
    if session.get('user_id'):
        return True
    return False

class Signup(Resource):

    def post(self):
        username = request.get_json().get('username')
        password = request.get_json().get('password')
        if username and password and not User.query.filter(User.username == username).first():
            new_user = User(
                username = username,
                image = request.get_json()['image'],
                email = request.get_json()['email']
        )
            new_user.password_hash = password
            db.session.add(new_user)
            db.session.commit()
            return new_user.to_dict(), 201
        return {'error': '422 Unprocessable Entity'}, 422

class Login(Resource):
  
    def post(self):
        data = request.get_json()
        username = data['username']
        password = data['password']
        user = User.query.filter(User.username == username).first()
        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
                if check_session():
                    return user.to_dict(), 200
                return {'error': 'session could not be established'}, 400
        return {'error': "Unauthorized"}, 401

class CheckSession(Resource):
  
  def get(self):
    user = User.query.filter(User.id == session.get('user_id')).first()
    if user:
        return user.to_dict(), 200
    return {'error': 'Unauthorized'}, 401

class Logout(Resource):
  
  def delete(self):
    if check_session():
        session['user_id'] = None
        return {}, 204
    return {'error': 'Unauthorized'}, 401

class Projects(Resource):

    def get(self):
        if check_session():
            projects = Project.query.filter(Project.user_id == session['user_id']).all()
            if(projects):
               return [p.to_dict(rules=('-user',)) for p in projects], 200
            return {'error': 'No projects found'}, 404
        return {'error': 'Unauthorized'}, 401

    def post(self):
        if check_session():
            try: 
                new_project = Project(
                    user_id = session.get('user_id'),
                    image = request.get_json()['image'],
                    name = request.get_json()['name'],
                    description = request.get_json()['description'],
                    start_date = request.get_json()['start_date'],
                    finish_date = request.get_json()['finish_date'],
                    github = request.get_json()['github'],
                    demo = request.get_json()['demo']
                )
                db.session.add(new_project)
                db.session.commit()
                return new_project.to_dict(), 201
            except IntegrityError:
                return {'error': 'could not create project'}, 422
        return {'error': "Unauthorized"} 

class ProjectById(Resource):
   
    def get(self, id):
        if check_session():
            project = Project.query.filter(Project.id == id).first()
            if project:
                return project.to_dict(), 200
            return {'error': 'Project not found'}, 404
        return {'error': "Unauthorized"}, 401
    
    def patch(self, id):
        if check_session():
            project = Project.query.filter(Project.id == id).first()
            if project:
                for attr in request.get_json():
                   setattr(project, attr, request.get_json()[attr])
                return project.to_dict(), 200
            return {'error': 'Project not found'}, 404
        return {'error': 'Unauthorized'}, 401    



# user routes
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')

# project routes
api.add_resource(Projects, '/project', endpoint='project')
api.add_resource(ProjectById, '/project/<int:id>')

if __name__ == '__main__':
  app.run(port=5555, debug=True)