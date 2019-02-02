import automationhat
import time

class WaremaBlind():

    """Class to control Warema window blinds.
        (Local operation: time mode)
    """

    # def __init__(self):
    #     self.position = 100  # bottom
    #     self.tilt = 0        # close
    #     self.down(36)

    def init(self):
        self.position = 100
        self.down(36)

    def status(self):
        return self.position


    def tilt(self, value): # 0 is close one is open
        relay = automationhat.relay.one
        if value > 0
            relay = automationhat.relay.two
        self.tilt = self.tilt + value
        if self.tilt > 1:
            self.tilt = 1
        if self.tilt < 0:
            self.tilt = 0

        relay.on()
        time.sleep(value)
        relay.one.off()


    # def tilt_open(self, value ): # tilt from 100 to 0
    #     automationhat.relay.one.on()
    #     time.sleep(1)
    #     automationhat.relay.one.off()

    # def tilt_close(self, value: float):  # tilt from 1 to 0
    #     remaining = 1 - self.tilt #
    #     if value > remaining:
    #         value = remaining
    #     self.tilt = value
    #     seconds = value / 100
    #     automationhat.relay.two.on()
    #     time.sleep(seconds)
    #     automationhat.relay.two.off()






    def up(self, seconds: float):
        """Moves the window blind upwards.

        Args:
            seconds (float): Seconds to move.
        """

        self.position  = self.position - 10
        automationhat.relay.one.on()
        time.sleep(seconds)
        automationhat.relay.one.off()
        print("going up")
        time.sleep(0.1)

        # if blind has entered lock mode
        if seconds >= 2:
            automationhat.relay.two.on()
            time.sleep(0.1)
            automationhat.relay.two.off()
            time.sleep(0.1)

        print("finish up")

    def down(self, seconds: float):
        """Moves the window blind downwards.

        Args:
            seconds (float): Seconds to move.
        """
        automationhat.relay.two.on()
        print("going down")
        time.sleep(seconds)

        print("down !")
        automationhat.relay.two.off()
        time.sleep(0.1)

        # if blind has entered lock mode
        if seconds >= 2:
            automationhat.relay.one.on()
            time.sleep(0.1)
            automationhat.relay.one.off()
            time.sleep(0.1)
