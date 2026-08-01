# Hybrid-Traffic-Signal-System
An intelligent hybrid traffic signal system that optimizes traffic flow using sensor-based vehicle detection and adaptive signal control.
# Hybrid Traffic Signal System using Raspberry Pi and YOLO

## Overview

The Hybrid Traffic Signal System is an AI-powered intelligent traffic management system that dynamically controls traffic signals based on real-time traffic density. The system uses a Raspberry Pi running a YOLO object detection model to identify and count vehicles from live camera feeds. Based on the detected traffic, the signal timing is adjusted automatically to minimize congestion.

The system also provides **Emergency Vehicle Priority**, allowing ambulances, fire trucks, and police vehicles to receive immediate green signals for faster and safer passage.

---

## Features

* Real-time vehicle detection using YOLO
* Adaptive traffic signal control
* Emergency vehicle priority
* Raspberry Pi edge processing
* Automatic vehicle counting
* Reduced traffic congestion
* Scalable to four-way intersections
* Low-cost smart city solution

---

## Hardware

* Raspberry Pi 5 (or Raspberry Pi 4)
* Raspberry Pi Camera Module / USB Camera
* Traffic Signal LEDs
* Relay Module (or Signal Driver)
* Power Supply
* Breadboard
* Connecting Wires

---

## Software

* Python
* OpenCV
* YOLOv8 (Ultralytics)
* Raspberry Pi OS
* VS Code
* Git & GitHub

---

## System Architecture

Camera
↓
YOLO Vehicle Detection
↓
Vehicle Counting
↓
Traffic Density Analysis
↓
Signal Timing Algorithm
↓
Traffic Signal Controller

Emergency Vehicle Detection
↓
Immediate Green Signal
↓
Normal Operation Resumes

---

## Working Principle

1. Cameras continuously capture traffic at each road.
2. YOLO detects vehicles in real time.
3. The Raspberry Pi counts the detected vehicles.
4. Traffic density is calculated for every lane.
5. The lane with the highest traffic receives a longer green signal.
6. If an ambulance, fire engine, or police vehicle is detected, the controller immediately switches the corresponding lane to green.
7. Once the emergency vehicle passes, the system returns to normal adaptive operation.

---

## Technologies Used

* Raspberry Pi
* Python
* OpenCV
* YOLOv8
* Computer Vision
* Embedded Systems
* Artificial Intelligence
* Edge Computing

---

## Applications

* Smart Cities
* Urban Traffic Management
* Highway Intersections
* Emergency Response Systems
* Intelligent Transportation Systems (ITS)

---

## Future Enhancements

* License Plate Recognition (ANPR)
* Cloud-based Monitoring Dashboard
* Traffic Analytics
* AI-based Traffic Prediction
* IoT Integration
* Remote Monitoring
* Automatic Incident Detection

---

## Author

**Ragu Pathi**

Final Year B.E. Electrical and Electronics Engineering

V.S.B Engineering College
