from flask import Flask, render_template
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

import sys
sys.path.insert(0, '../')
from warema_python_api.warema import  WaremaBlind

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@socketio.on('my event')
def handle_my_custom_event(json):
    print('received json: ' + str(json))

@socketio.on('message')
def handle_message(message):
    send("chat message", message)

if __name__ == '__main__':
    socketio.run(app)

# @app.route('/')
# def hello_world():
#     return render_template('hi.html')


@app.route('/blinds/open', methods=['GET'])
def blind_open():
    return 'OPEN'

@app.route('/blinds/close', methods=['GET'])
def blind_close():
    return 'CLOSE'

@app.route('/blinds/up', methods=['GET'])
def blind_up():
    return 'UP'

@app.route('/blinds/down', methods=['GET'])
def blind_down():
    return 'DOWN'

@app.route('/blinds/up/<int:amount>', methods=['GET'])
def blind_up_by(amount):
    return 'UP '+ str(amount)

@app.route('/blinds/down/<int:amount>', methods=['GET'])
def blind_down_by(amount):
    return 'DOWN '+ str(amount)

@app.route('/blinds/stop', methods=['GET'])
def blind_stop():
    return 'STOPPING '

# @app.route('/blinds/tilt/<int:amount>', methods=['GET'])
# def blind_down_by(amount):
#     return 'DOWN '+ str(amount)


@app.route('/blinds/meeting/start', methods=['GET'])
def meeting_start():
    return 'MEETING START'

@app.route('/blinds/meeting/end', methods=['GET'])
def meeting_end():
    return 'MEETING END'

@app.route('/blinds/meeting/<string:meeting_type>', methods=['GET'])
def meeting_switch_to(meeting_type):
    return 'MEETING '+ meeting_type
