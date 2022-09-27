

from flask import Flask,request 
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Micro12321@localhost/BjjUser'
db =SQLAlchemy(app)
CORS(app)
class Event(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(100), nullable = False)
    email = db.Column(db.String(100), nullable = False)
    password = db.Column(db.String(100), nullable = False)
    submissions = db.Column(db.Integer,default=0)
    wins = db.Column(db.Integer,default=0)
    loses = db.Column(db.Integer,default=0)

    def __repr__(self):
        return f"Event: {self.username}" 
    def __init__(self, username, email, password) :
        self.username = username
        self.email = email
        self.password = password
        self.submissions = 0
        self.wins = 0
        self.loses = 0

def format_event(event):
    return {
        "username": event.username,
        "id": event.id,
        "email": event.email,
        "password": event.password,
        "submissions": event.submissions,
        "wins": event.wins,
        "loses": event.loses,

    }

@app.route('/')
def hello():
    return 'heldlsodsd'

#create an user
@app.route('/events', methods = ['POST'])
def create_user():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    event = Event(username,email,password)
    db.session.add(event)
    db.session.commit()
    return format_event(event)

#get all users
@app.route('/events', methods = ['GET'])
def get_users():
    events = Event.query.order_by(Event.id.asc()).all()
    event_list = []
    for event in events:
        event_list.append(format_event(event))
    return {'events':event_list}

#get a songle user
@app.route('/events/<id>', methods = ['GET'])
def get_user(id):
    event = Event.query.filter_by(id=id).one()
    formatted = format_event(event)
    return {'event': formatted}

#delete an event
@app.route('/events/<id>', methods = ['DELETE'])
def delete_user(id):
    event = Event.query.filter_by(id=id).one()
    db.session.delete(event)
    db.session.commit()
    return 'event id: ' + id+' deleted!'

#edit an user profile
@app.route('/events/<id>', methods = ['PUT'])
def update_user(id):
    event = Event.query.filter_by(id=id)
    username = request.json['username']
    email = request.json['email']
    event.update(dict(username = username, email=email))
    db.session.commit()
    return {'event': format_event(event.one())}

if __name__ == '__main__':
    app.run()

