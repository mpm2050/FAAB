﻿"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template, render_template_string, jsonify, request
from FAABModel import app

@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
    )

@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template(
        'contact.html',
        title='Contact',
        year=datetime.now().year,
        message='Your contact page.'
    )

@app.route('/about')
def about():
    """Renders the about page."""
    return render_template(
        'about.html',
        title='About',
        year=datetime.now().year,
        message='Your application description page.'
    )



tableDetails = [{
        "uid": "d4c74a61-a24e-429f-9db0-3cf3aaa22425",
        "name": "Monique Zebedee",
        "company": "Welch LLC",
        "country": "Japan",
        "memberSince": "2012-02-18",
        "orderPlaced": 111,
        "level": "Bronze",
        "isNPO":"true"
    }, {
        "uid": "afdf285d-da5c-4fa8-9225-201c858a173d",
        "name": "Daryle McLaren",
        "company": "Bogisich Group",
        "country": "United States",
        "memberSince": "2016-10-08",
        "orderPlaced": 261,
        "level": "Diamond",
        "isNPO": "false"
    }, {
        "uid": "202a8afb-130b-476b-b415-c659f21a73e7",
        "name": "Glori Spellecy",
        "company": "Grady and Sons",
        "country": "Germany",
        "memberSince": "2014-07-28",
        "orderPlaced": 282,
        "level": "Gold",
        "isNPO": "false"
    }, {
        "uid": "08c9adee-abdd-43d5-866d-ce540be19be8",
        "name": "Blondy Boggis",
        "company": "Eichmann, Parker and Herzog",
        "country": "Malaysia",
        "memberSince": "2010-08-17",
        "orderPlaced": 308,
        "level": "Platinum",
        "isNPO":"true"
    }, {
        "uid": "57644023-cd0c-47ec-a556-fd8d4e21a4e7",
        "name": "Batholomew Zecchii",
        "company": "Corwin-Fahey",
        "country": "Malaysia",
        "memberSince": "2016-09-20",
        "orderPlaced": 881,
        "level": "Gold",
        "isNPO":"true"
    }, {
        "uid": "38e08e8a-c7eb-41eb-9191-6bb2df1fd39b",
        "name": "Paulie Poel",
        "company": "MacGyver, Rohan and West",
        "country": "United Kingdom",
        "memberSince": "2016-12-26",
        "orderPlaced": 387,
        "level": "Silver",
        "isNPO": "false"
    }, {
        "uid": "d7bf56d4-f955-4dca-b3db-b30eab590028",
        "name": "Jessica Levett",
        "company": "Lind, O'Kon and Hamill",
        "country": "United States",
        "memberSince": "2015-04-26",
        "orderPlaced": 984,
        "level": "Gold",
        "isNPO": "false"
    }, {
        "uid": "b9075764-5228-4ca7-9435-7c362ce097e5",
        "name": "Fonsie Spring",
        "company": "McKenzie, Block and Wiegand",
        "country": "Japan",
        "memberSince": "2013-11-08",
        "orderPlaced": 875,
        "level": "Silver",
        "isNPO": "false"
    }
]



@app.route('/tableDetails')
def get_incomes():
    return jsonify(tableDetails)


@app.route('/tableDetails', methods=['POST'])
def add_income():
    tableDetails.append(request.get_json())
    return '', 204
