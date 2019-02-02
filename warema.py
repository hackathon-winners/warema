import automationhat
import time

class WaremaBlind():
    """Class to control Warema window blinds.

    """
    def up(self, seconds: float):
        automationhat.relay.one.on()
        time.sleep(seconds)
        automationhat.relay.one.off()
        time.sleep(0.1)
        if seconds >= 2:
            automationhat.relay.two.on()
            time.sleep(0.1)
            automationhat.relay.two.off()
            time.sleep(0.1)

    def down(self, seconds: float):
        automationhat.relay.two.on()
        time.sleep(seconds)
        automationhat.relay.two.off()
        time.sleep(0.1)
        if seconds >= 2:
            automationhat.relay.one.on()
            time.sleep(0.1)
            automationhat.relay.one.off()
            time.sleep(0.1)

    def tilt_up(self, secs_up: float,
                secs_down: float):
        up(secs_up)
        down(secs_down)

    def tilt_down(self, secs_up: float,
                  secs_down: float):
        down(secs_down)
        up(secs_up)
