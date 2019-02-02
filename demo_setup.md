## IF WIFI ON: Enable Internet Sharing

	System preferences -> Sharing -> Enable Internet Sharing for USB.

## IF WIFI OFF: Set static IP  
	
	System preferences -> USB
	- Set IPv4 to 192.168.1.1
	- Go to Advance, DNS and set it to 8.8.8.8

## CONNECT RASPBERRY Pi

	It will be available from IP 192.168.3.2 or 192.168.2.2 (most common addresses). If there is no WiFi, it means there is no DHCP server and the Raspi will have a fixed addres (192.168.1.2).

	To connect the Raspi:
		- ssh pi@{IP} 
		- password: raspberry

	To interact with the server from within the local network the raspberry pi is in:
	    - curl -i {IP}:5000/{URL}