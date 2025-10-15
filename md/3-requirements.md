{ 
  "title": "Požiadavky", 
  "description": "Funkcionálne požiadavky na projekt SIGNALIS", 
  "url": "https://www.fiit.stuba.sk/", 
  "topics": [],
  "date": "1-10-2025"
} 

%%%

# Functional requirements

## IRIS

- Arduino based
- Battery powered (3.7V Lipo) (30min lifetime)
- 200g max (including battery)
- 9DOF IMU (16g+-), Barometer, GPS, Radio (LoRA)
- Ability to calibrate the sensors before launch
- Subsonic (below Mach 1)
- Data logging - both on the device directly (data stored on a flash chip, CSV format) and with the base station via radio telemetry
  * Flash should be able to hold data from the last 3 flights
  * Logs (raw, real time): sensor data (3 axis accelerometer data, 3 axis gyroscope data, 3 axis magnetometer data, pressure data, temperature data), GPS data (latitude, longitude)
  * Logs (event based): ??parachute deployment??, ??motor burnout??, launch, apogee, time for apogee, after apogee - max vertical speed, time to reach max vertical speed, max angular rate
- Radio communication with the HERMES base station up to 2km
- Fits into BT-60 and BT-80 body tubes
- 3D printable (FDM) design

- ?? Custom PCB ?? (with extra high resolution accelerometer for high Gs)

![IRIS Device](/report-images/requirements/iris.png)

## HERMES

- ESP32 based
  * Connector should be exposed even when the base station is assembled (for easy programming)
  * Wireless connection (wifi / bt) with a companion app (web app, python script... whatever)
  * Allows flight data exporting + telemetry viewing
- Battery powered (anything suitable) (90min lifetime)
- Power on / off switch
- Radio (LoRA)
  * Radio communication with the IRIS data logger up to 2km
- 3 color LED to indicate status (e.g. green LED after the GPS acquires lock + sensors are calibrated)
- 3D printable (FDM) design
  * Base station should be easy to disassemble

![Hermes Device](/report-images/requirements/hermes.png)