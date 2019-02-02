from flask import Flask, render_template
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

import asyncio
import sys
import time
sys.path.insert(0, '../')
from warema_python_api.warema import  WaremaBlind

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

warema = WaremaBlind()

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

@app.route('/blinds/init', methods=['GET'])
def blind_init():
    warema.init()
    return 'initialize'

@app.route('/blinds/status', methods=['GET'])
def blind_status():
    status = warema.status()
    return 'initialize '+ str(status)

# @app.route('/blinds/open', methods=['GET'])
# def blind_open():
#     warema.up(1)
#     return 'OPEN'

# @app.route('/blinds/close', methods=['GET'])
# def blind_close():
#     return 'CLOSE'

@app.route('/blinds/up', methods=['GET'])
def blind_up():
    warema.up(1)
    return 'UP'

@app.route('/blinds/down', methods=['GET'])
def blind_down():
    warema.down(1)
    return 'DOWN'

@app.route('/blinds/up/<int:amount>', methods=['GET'])
def blind_up_by(amount):
    warema.up(amount)
    return 'UP '+ str(amount)

@app.route('/blinds/down/<int:amount>', methods=['GET'])
def blind_down_by(amount):
    warema.down(amount)
    return 'DOWN '+ str(amount)

@app.route('/blinds/tilt/<float:amount>', methods=['GET'])
def blind_tilt(amount):
    warema.tilt(amount)
    return 'titl '

# @app.route('/blinds/stop', methods=['GET'])
# def blind_stop():
#     return 'STOPPING '

# @app.route('/blinds/tilt/<int:amount>', methods=['GET'])
# def blind_down_by(amount):
#     return 'DOWN '+ str(amount)


@app.route('/blinds/meeting/start', methods=['GET'])
def meeting_start():

    # formal meeting cfirst close then starts half, formal metting tilt completly then is over
    warema.set_tilt(.5)
    return  'MEETING START'

@app.route('/blinds/meeting/formal', methods=['GET'])
def meeting_formal():
    warema.set_tilt(.5)
    return 'MEETING formal'




@app.route('/blinds/meeting/empty', methods=['GET'])
def meeting_empty():
    warema.down( 3 )
    return 'MEETING EMPTY  '+ str(status)

@app.route('/blinds/meeting/end', methods=['GET'])
def meeting_end():
    warema.up( 37 )
    return 'MEETING END'

# formal engage
@app.route('/blinds/meeting/<string:meeting_type>', methods=['GET'])
def meeting_switch_to(meeting_type):
    return 'MEETING '+ meeting_type

@app.route('/starwars', methods=['GET'])
def starwars():
    warema.set_tilt(0)
    warema.up(4)
    time.sleep(.1)

    warema.set_tilt(.5)
    warema.set_tilt(-.5)
    warema.set_tilt(.5)
    time.sleep(.5)

    warema.set_tilt(-.5)
    warema.set_tilt(.5)
    warema.set_tilt(-.5)
    warema.set_tilt(-.2)
    warema.set_tilt(.6)
    warema.set_tilt(-.6)


    return 'DOWN '
