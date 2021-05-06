# Phish Off Flask Views (Routes) and login
# Created by Viacheslav Rawles 
# 
# References used 

# Flask-login.readthedocs.io. 2021. Flask-Login — Flask-Login 0.4.1 documentation. [online] Available at: <https://flask-login.readthedocs.io/en/latest/> [Accessed 5 May 2021].
# Herbet, A., 2019. How To Add Authentication to Your App with Flask-Login | DigitalOcean. [online] DigitalOcean. Available at: <https://www.digitalocean.com/community/tutorials/how-to-add-authentication-to-your-app-with-flask-login> [Accessed 25 April 2021].
# Python Basics. 2021. Flask Tutorial: Routes. [online] Available at: <https://pythonbasics.org/flask-tutorial-routes/> [Accessed 26 April 2021].


# import var app from __init__ in order to access app anywhere in the package
from app import app

# import flask function render_template
from flask import render_template, request

# import flask login for users
from flask_login import LoginManager, login_user, login_required, current_user, UserMixin

# import mail and message functions from flask mail
from flask_mail import Mail, Message

# import flask sql
from flask_sqlalchemy import SQLAlchemy
# import table 'User'
from app import User
# import database
from app import db 
# import the level 2 quiz login form
from .forms import quizloginn2
# import the level 3 quiz login form 
from .forms import quizloginn3
# import the signup webpage form
from .forms import signup1
# import the login form for phishoff
from .forms import login1
# import the sendtemplate form for phish simulator
from .forms import sendtemplate
# import the simulatorverification
from .forms import simulatorverification

# creating the login manager class
login_manager = LoginManager()
# configure login manager
login_manager.init_app(app)
login_manager.login_view = 'login'

# routes
# homepage route
@app.route("/home")  # assign a URL
def home():   # define the function home
    return render_template("public/home.html")  # load the template html file /home.html

# blogpage route
@app.route("/blog")
def blog():    # blog function
    return render_template("public/blog.html")  # load the blog html template

# phish quiz route
@app.route("/phishquiz", methods=["POST", "GET"])   # POST = send data to the server to update or create, GET = request data from a resource
@login_required     # using the @login_required decorator to make it a requirment for users to login first before being able to access the phish quiz
def phishquiz():    # phishquiz function
    return render_template("public/phishquiz.html")    # load the phishquiz template for this route

    if phishquiz.validate_on_submit():   # when the form is validated on sumbit (button confirmation) 
        return render_template("public/quizlogin", quizlogin=phishquiz)   # return the phish quiz page when login is validated

# phish simulator login page route
@app.route("/phishsimulatorlogin", methods=["POST", "GET"])                # *** IN ORDER TO ACCESS THE PHISHSIMULATOR WEBPAGE PLEASE ENTER THE DIRECT URL /phishsimulator
def phishsimulatorlogin():                                                  # Flask-mail implementation is causing errors, unsure how to fix it. ***
    phishsimulatorlogin = simulatorverification()

    if phishsimulatorlogin.validate_on_submit():                   
        msg = Message('Confirm Email', sender='phishoff1@gmail.com', recipients=[email])
        msg.body = "Hello"
        mail.send(msg)
    return render_template("public/phishsimulatorlogin.html", phishsimulatorlogin=phishsimulatorlogin)

# phish simulator route
@app.route("/phishsimulator", methods=["POST", "GET"])                    # *** IN ORDER TO ACCESS THE PHISHSIMULATOR WEBPAGE PLEASE ENTER THE DIRECT URL /phishsimulator
def phishsimulator():                                                       # Flask-mail implementation for /phishsimulatorlogin is causing errors, unsure how to fix it. ***
    phishsimulator = sendtemplate()

    if phishsimulator.validate_on_submit():
        return render_template('public/phishsimulator.html')
    return render_template('public/phishsimulator.html', phishsimulator=phishsimulator)

# quiz login page route (homepage of quiz login)
@app.route("/quizlogin", methods=["POST", "GET"])
def quizlogin():

        return render_template("public/quizlevel1.html")

# level 2 quiz login route 
@app.route("/quizlogin2", methods=["POST", "GET"])
def quizlogin2():
    quizlogin2 = quizloginn2()

    if quizlogin2.validate_on_submit():
        return render_template("public/quizlevel2.html")
    return render_template("public/quizlogin2.html", quizlogin2=quizlogin2)

# level 3 quiz login route 
@app.route("/quizlogin3", methods=["POST", "GET"])
def quizlogin3():
    quizlogin3 = quizloginn3()

    if quizlogin3.validate_on_submit():
        return render_template("public/quizlevel3.html")
    return render_template("public/quizlogin3.html", quizlogin3=quizlogin3)

# quiz level one route 
@app.route("/quizlevel1", methods =["POST", "GET"])
@login_required  # login is required to access this page
def quizlevel1():
    return render_template("public/quizlevel1.html")

    if quizlevel1.validate_on_submit():
        return render_template("public/quizlevel1.html")

# quiz level 2 route 
@app.route("/quizlevel2", methods =["POST", "GET"])
@login_required   # login is required to access this page
def quizlevel2():
    return render_template("public/quizlevel2.html")

# quiz level 3 route 
@app.route("/quizlevel3", methods =["POST", "GET"])
@login_required   # login is required to access this page
def quizlevel3():
    return render_template("public/quizlevel3.html")

# bonus level route 
@app.route("/bonuslevel", methods =["POST", "GET"])
def bonuslevel():
    return render_template("public/bonuslevel.html")


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(userid))

@app.route("/login", methods=["POST", "GET"])
def login():
    login = login1()
    
    if login.validate_on_submit():
        user = User.query.filter_by(name=login.name.data).first() # check the phish off user database by searching for the unique 'name'
        if user:  # if the users name exsists in the phish off database 
            if user.password == login.password.data:   # load phish quiz if password matches the users password in the database
                return render_template("public/phishquiz.html")

        return "Incorrect username or password, please try again."

    return render_template("public/login.html", login=login)

# sign up page route 
@app.route("/signup", methods=["POST", "GET"])
def signup():
    signup = signup1()
    if signup.validate_on_submit():  # add a new user on submit
        # so users can pass in data on the signup form, name, email and password. 
        new_user = User(name=signup.name.data, email=signup.email.data, password=signup.password.data)
        db.session.add(new_user)  # create a new user in the database
        db.session.commit()    # update
        return render_template("public/phishquiz.html") 

    return render_template("public/signup.html", signup=signup)

# about page route
@app.route("/about")
def about():
    return render_template("public/about.html")
    
# archive route
@app.route("/archive")
def archive():
    return render_template("public/archive.html")
