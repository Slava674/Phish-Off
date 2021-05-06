# Admin space (Not used in Phish Off, only used for design purposes)
# Created by Viacheslav Rawles

# import app
from app import app

# import function render_template
from flask import render_template

#new route seperated from normal phish off pages
@app.route("/admin/adminpanel")
def admin_panel():
    return render_template("admin/adminpanel.html")