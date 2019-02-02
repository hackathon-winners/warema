from flask import Flask
import time

import sys
sys.path.insert(0, '../')
# custom Warema API
from warema_python_api.warema import  WaremaBlind

app = Flask(__name__)
warema = WaremaBlind()

@app.route('/blinds/init', methods=['GET'])
def blind_init():
    warema.init()
    return 'initialize'

@app.route('/blinds/status', methods=['GET'])
def blind_status():
    status = warema.status()
    return 'initialize '+ str(status)

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
    warema.set_tilt(amount)
    return 'titl '

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

# THE REAL CODE STARTS HERE
# DOING MUSIC WITH THE BLINDS
@app.route('/music/smoke', methods=['GET'])
def smoke():
    for x in range(2):
        warema.set_tilt(.250)
        time.sleep(0.250)
        warema.set_tilt(-.250)
        time.sleep(0.250)
        warema.set_tilt(.500)
        time.sleep(0.200)
        warema.set_tilt(-.250)
        time.sleep(0.200)
        warema.set_tilt(.250)
        time.sleep(0.150)
        warema.set_tilt(-.250)
        warema.set_tilt(.500)
        time.sleep(0.500)
        warema.set_tilt(-.250)
        time.sleep(0.250)
        warema.set_tilt(.250)
        time.sleep(0.250)
        warema.set_tilt(-.500)
        time.sleep(0.30)
        warema.set_tilt(.350)
        warema.set_tilt(-.750)
        time.sleep(1)
    return 'SMOKE'

@app.route('/music/starwars', methods=['GET'])
def starwars():
    warema.set_tilt(0)
    time.sleep(2)

    warema.set_tilt(.990/ 3)
    time.sleep(.2)
    warema.set_tilt(-.990/ 3)
    time.sleep(.2)
    warema.set_tilt(.990/ 3)
    time.sleep(.2)
    warema.set_tilt(-.710/ 3)
    time.sleep(.2)
    warema.set_tilt(.220/ 3)
    time.sleep(.2)
    warema.set_tilt(-.990/ 3)
    time.sleep(.2)
    warema.set_tilt(.710/ 3)
    time.sleep(.2)
    warema.set_tilt(-.220/ 3)
    time.sleep(.2)
    warema.set_tilt(.470/ 3)
    time.sleep(.2)

    time.sleep(1.520 / 3)
    time.sleep(.2)

    warema.set_tilt(1/ 3)
    time.sleep(.2)
    warema.set_tilt(-.990/ 3)
    time.sleep(.2)
    warema.set_tilt(.990/ 3)
    time.sleep(.2)
    warema.set_tilt(-.710/ 3)
    time.sleep(.2)
    warema.set_tilt(.220/ 3)
    time.sleep(.2)
    warema.set_tilt(-.990/ 3)
    time.sleep(.2)
    warema.set_tilt(.710/ 3)
    time.sleep(.2)
    warema.set_tilt(-.220/ 3)
    time.sleep(.2)
    warema.set_tilt(.470/ 3)
    time.sleep(.2)

    warema.set_tilt(-.5)
    warema.set_tilt(.5)
    warema.set_tilt(-.5)
    warema.set_tilt(-.2)
    warema.set_tilt(.6)
    warema.set_tilt(-.6)

    return 'STAR WARS '