from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt

class User(db.Model, SerializerMixin):

    __tablename__ = 'users'

    serialize_rules = ('-_password_hash', '-projects', '-skills')

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String)

    projects = db.relationship('Project', back_populates='user', cascade='all, delete, delete-orphan')
    skills = db.relationship('Skill', back_populates='user', cascade='all, delete, delete-orphan')

    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash =  bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8')
        )
        
    @validates('username')
    def validate_username(self, key, name):
        if not name or not isinstance(name, str):
            raise ValueError('Username must be non-empty string.')
        return name
    
    @validates('email')
    def validate_email(self, key, email):
        if '@' not in email or not email:
           raise ValueError('Must provide email and be in the form of johnSMith@email.com')
        return email 
    
class Project(db.Model, SerializerMixin):
    
    __tablename__ = 'projects'

    serialize_rules = ('-user',)

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    start_date = db.Column(db.String, nullable=False)
    finish_date = db.Column(db.String, nullable=False)
    github = db.Column(db.String, nullable=False)
    demo = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship('User', back_populates='projects')

class Skill(db.Model, SerializerMixin):

    __tablename__ = 'skills'

    serialize_rules = ('-user',)

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship('User', back_populates='skills')