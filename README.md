# Making Warema Blinds Smart

This is the open-source repository for the Warema Challenge "Smart window blinds for comfort" of the BE5 Makeathon. Our project's goal is to improve meetings' productivity by altering the lightning conditions of the meeting rooms. With that in mind, we designed a "productivity index" based on the motion happening in the meeting room. We track when a meeting starts and its type (formal or engaged) entirely based on movement. Window blinds react accordingly to provide light and improve mood and engagement.

Each folder represents a different component, building up the full system. This is made up of:
* A dashboard (React)
* A backend server (Flask)
* Window Blind Control API (Python)

The server runs on a Raspberry Pi 3 B+, which has an Automation Hat attached to it. The window blind control API uses existing libraries to control the relays of the Automation Hat and thus interacting with the window blind.

Further details of each component can be found in the corresponding *README.md* file of each subdirectory.
