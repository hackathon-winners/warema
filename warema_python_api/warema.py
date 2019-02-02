import automationhat
import time

class WaremaBlind():
    """Class to control Warema window blinds.
        (Local operation: time mode)
    """
    def up(self, seconds: float):
        """Moves the window blind upwards.

        Args:
            seconds (float): Seconds to move.
        """
        automationhat.relay.one.on()
        time.sleep(seconds)
        automationhat.relay.one.off()
        time.sleep(0.1)

        # if blind has entered lock mode
        if seconds >= 2:
            automationhat.relay.two.on()
            time.sleep(0.1)
            automationhat.relay.two.off()
            time.sleep(0.1)

    def down(self, seconds: float):
        """Moves the window blind downwards.

        Args:
            seconds (float): Seconds to move.
        """
        automationhat.relay.two.on()
        time.sleep(seconds)
        automationhat.relay.two.off()
        time.sleep(0.1)

        # if blind has entered lock mode
        if seconds >= 2:
            automationhat.relay.one.on()
            time.sleep(0.1)
            automationhat.relay.one.off()
            time.sleep(0.1)
