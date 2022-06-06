# ChargeMyCar
A simple app which allows a user to view surrounding public charging stations, select one and charge it

## Getting Started

### Clone the Repository

As usual, you get started by cloning the project to your local machine:



## Prerequisites
1. Have yarn || npm installed
2. Have a mobile device || Android Studio || Expo installed

### Open and Run Project in Expo

1. In the terminal run `yarn start`

2. Scan QR code with the mobile phone

3. Open Expo

## The main idea

The app should be as simple as possible. 
1. Login
2. Auto-detect your location
3. Choose charging station
4. Press Start Charging Button once you are ready.

### Functionality

1. Fetch Map from the API with all the charging stations available
2. Filter charging stations based on your current location latitude and longitude is used for bounding box
3. Update the coordinates "every" time user moves
4. Once user chose the charging station, retrieve the ChargingPointID.
5. POST to Ev.energy API with the ChargingPointID

#### Remarks
* Ideally user should update bounding box everytime he/she moves 
* Once charging point is selected user should retrieve the ChargingPointID
## Next steps

The above is presented the very basic functionality of the app.

What could be improved: 
1. Login based on the faceID or fingerprint  because user is driving
2. Pre-filtered user preferences such as: city, connectionType, currentType, currentStatus, paymentMethod and etc.
3. Instead of showing the map, show the list of stations sorted by closest distance.
4. User should be able to freely switch between map with charging stations and list of charging stations
4. Once user picked up the station open Waze/ Google Maps in order to navigate the user
5. The interface for charging process shows up automatically once user arrived to its destination.


