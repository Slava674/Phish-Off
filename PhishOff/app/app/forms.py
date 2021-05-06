# Phish Off Flask forms
# Created by Viacheslav Rawles 
# Flask WTF and WTForms documentation used 

# References used 
# Wtforms.readthedocs.io. 2008. WTForms — WTForms Documentation (2.3.x). [online] Available at: <https://wtforms.readthedocs.io/en/2.3.x/> [Accessed 8 April 2021].
# Wtforms.readthedocs.io. 2008. Validators — WTForms Documentation (2.3.x). [online] Available at: <https://wtforms.readthedocs.io/en/2.3.x/validators/> [Accessed 5 May 2021].

# import app
from app import app
# import FlaskForm 
from flask import Flask, render_template
# import input fields 
from flask_wtf import FlaskForm
# import mail and message functions from flask mail
from flask_mail import Mail, Message
# import stringfield - for name and email, submit field for button
from wtforms import StringField, PasswordField, SubmitField, RadioField, BooleanField
# import validators 
from wtforms.validators import Length, InputRequired, DataRequired, Email, AnyOf

# login page form, this will ask the user for their name, password and ask if they would like to stay logged in
class login1(FlaskForm):
    # form name field, takes strings only, validators are included so that input is required. Lenth of string rules are in place, minimum of 1 character, max of 21.
    name = StringField('Name:', validators=[InputRequired(), Length(min=1, max=21, message='Please enter the name you registered with.')])
    # password field, input is required, character length rules, 7 minimum characters minimum is required as a password. This is so that password complexity can be stronger.
    password = PasswordField('Password:', validators=[InputRequired(), Length(min=7, max=30, message='Incorrect password')])
    remember_user = BooleanField('Stay logged in?', default = False) # remember the user field, boolean value, default checkbox is marked as False

# sign up page form, this will ask the user for their name, email, desired password and if they would like to stay logged in
class signup1(FlaskForm):
    # name string field, one character must be entered to proceed
    name = StringField('Name:', validators=[InputRequired(), Length(min=1, max=21, message='Please enter atleast 1 character')])
    # email field 'Email' validator is used to ensure that a legitimate email is passed through the field, an error will be brought up if not
    email = StringField('Email:', validators=[InputRequired(), Email(message='Invalid Email, Please enter a valid email address')])  
    # password field 
    password = PasswordField('Password:', validators=[InputRequired(), Length(min=7, max=30, message='Please enter a password with a minimum of 7 characters')])
    # remember the user field
    remember_user = BooleanField('remember_user', default = False) # remember the user field

# quiz level 2 login form. This form takes in the password that is given on a successful completetion of level 1
class quizloginn2(FlaskForm):
    # name option added to congratulate the user by name at the end of the quiz level
    name = StringField('Name:', validators=[InputRequired(), Length(min=1, max=21, message='Please enter atleast 1 character')])
    # password that is required to access level 2 of the quiz. 'AnyOf' validator has been put in to allow only the password value to be entered for access.
    password = PasswordField('Password:', validators=[InputRequired(), AnyOf(values=['3r9Phish7JkX245c'])]) 

# quiz level 3 login form
class quizloginn3(FlaskForm):
    # name field
    name = StringField('Name:', validators=[InputRequired(), Length(min=1, max=21, message='Please enter atleast 1 character')])
    # password required to access level 3. This is given to the user if they successfully complete level 2
    password = PasswordField('Password:', validators=[InputRequired(), AnyOf(values=['00Admixn043ddifJ'])])

# phish simulator email verifier 
class simulatorverification(FlaskForm):
    email = StringField('Education Email:', validators=[InputRequired(), Email(message='Invalid Email, Please enter a valid email address')])
    password = PasswordField('One-time password:', validators=[InputRequired(), AnyOf(values=['34632415646312513'])])

# send template ** Does not work **
class sendtemplate(FlaskForm):
    name = StringField('Student name:', validators=[InputRequired(message='')])
    email = StringField('Student email:', validators=[DataRequired()])