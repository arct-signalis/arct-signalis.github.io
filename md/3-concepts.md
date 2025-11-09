{ 
  "title": "Koncept", 
  "description": "Koncepty pre projekt SIGNALIS", 
  "url": "https://github.com/06-STH-Projects", 
  "topics": [],
  "date": "1-10-2025"
} 

%%%

# Concept Overview

## IRIS

- Arduino Nano 33 BLE Sense Rev2
  - 9DOF IMU (BMI270 + BMM150)
  - Barometer (LPS22HB)
  - GPS (GPS + BDS BeiDou Dual Module)
  - LoRa Radio (E220-900T22D) (radio communication with the HERMES base station up to 2km)
- Battery powered (3.7V Lipo)
  - 30 minutes minimum lifetime required
- Data logging - both on the device directly (data stored on a flash chip, CSV format) and on the base station via radio telemetry
  - Flash should be able to hold data from the last 3 flights
  - Logs (raw, real time): sensor data (3 axis accelerometer data, 3 axis gyroscope data, 3 axis magnetometer data, pressure data, temperature data), GPS data (latitude, longitude)
  - Logs (event based): launch, apogee, time for apogee, after apogee - max vertical speed, time to reach max vertical speed, max angular rate
- 3D printable (FDM) brackets / adapters
  - Ridigity expectations for subsonic (below mach 1) flights
  - Fits into BT-80 body tubes
- 200g max for the whole assembly (including battery)

AI generated preview:

![IRIS Device](/report-images/requirements/iris.png)


## HERMES
- ESP32 
  - Programming interface (USB C port) should be exposed even when the base station is assembled (for easy programming)
  - Wireless connection (WiFi) with a companion app (web application)
    - Used for viewing flight telemetry
- Battery powered (any suitable battery)
  - 45 minutes minimum lifetime required
- Power on / off switch
- LoRa Radio (E220-900T22D) (radio communication with the IRIS data logger up to 2km)
- LEDs to indicate status (e.g., green LED turns on after the IRIS GPS acquires lock)
- 3D printable (FDM) design
  - Base station should be easy to disassemble

AI generated preview:

![Hermes Device](/report-images/requirements/hermes.png)