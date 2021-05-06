# Phish Off Flask python package and database
# Created by Viacheslav Rawles 

# References used

# Docs.sqlalchemy.org. 2021. Error Messages — SQLAlchemy 1.3 Documentation. [online] Available at: <https://docs.sqlalchemy.org/en/13/errors.html#error-e3q8)> [Accessed 5 May 2021].
# Flask-sqlalchemy.palletsprojects.com. 2010. Quickstart — Flask-SQLAlchemy Documentation (2.x). [online] Available at: <https://flask-sqlalchemy.palletsprojects.com/en/2.x/quickstart/#a-minimal-application> [Accessed 25 April 2021].
# Sqlalchemy.org. 2021. SQLAlchemy - The Database Toolkit for Python. [online] Available at: <https://www.sqlalchemy.org/> [Accessed 5 May 2021].

# import flask
from flask import Flask

# import flask mail 
from flask_mail import Mail, Message 

# import SQLAlchemy for database
from flask_sqlalchemy import SQLAlchemy

# import flask login for users
from flask_login import LoginManager, login_user, login_required, current_user, UserMixin

# create flask instance
app = Flask(__name__)
# secret key
app.config['SECRET_KEY'] = 'Admin'
# phish off database directory path
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C:/Users/VRawl/OneDrive/Desktop/PhishOff/app/database.db'
# create db 
db = SQLAlchemy(app)
# flask mail config file
app.config.from_pyfile('config.cfg')
# create mail instance
mail = Mail(app)

# phishoff database, user table. Controlled with flask_login.
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)  # user id, primary key 
    name = db.Column(db.String(21), unique=True)  # name of user, max 21 character strings excepted, unqiue only.
    email = db.Column(db.String(40), unique=True) # email of user, max string 40 characters taken. Only 1 email can be used per user.
    password = db.Column(db.String(30))           # password taken from the user is stored, only a maximum of 30 character string is taken. 

# import all of the function views from views.py
from app import views

# import the interactive forms from form.py
from app import forms

# import seperate phish off admin function views.py 
# **Not used implemented for design purposes**
from app import admin_views

