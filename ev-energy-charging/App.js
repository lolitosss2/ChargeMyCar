import { StyleSheet, View, Alert, Text } from "react-native";
import { Button } from "react-native-paper";
import { WebView } from "react-native-webview";
import React, { useEffect, useState } from "react";

export default function App() {
  const [latitude, setLatitude] = useState(56.00770576490109);
  const [longitude, setLongitude] = useState(12.637150614150471);
  const [chargingPointID, setChargingPointID] = useState(null);

  const fetchChargingStations = () => {
    return fetch(
      "https://api.openchargemap.io/v3/poi?key=bc4be8cd-81a5-4a8c-90ac-2914f73f0b92&verbose=true"
    )
      .then((response) => response.json())
      .then((json) => {
        json.map((arr) => {
          //setLatitude(arr.AddressInfo.Latitude);
          //setLongitude(arr.AddressInfo.Longitude);
        });

        if (longitude && latitude) updateLocation();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateLocation = () => {
    return fetch(
      `https://api.openchargemap.io/v3/poi?key=bc4be8cd-81a5-4a8c-90ac-2914f73f0b92&includecomments=true&maxresults=5&verbose=true&boundingbox=(${latitude},${longitude}),(${56.09774111614936},${12.753583917383537})`
    )
      .then((response) => response.json())
      .then((json) => {
        json.map((arr) => {
          arr.UserComments?.map((chargingPointID) =>
            setChargingPointID(chargingPointID.ChargePointID)
          );
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const startCharing = async () => {
    Alert.alert("Charging started successfully");
    return fetch("https://example.ev.energy/chargingsession", {
      user: 1,
      car_id: 1,
      charger_id: chargingPointID,
    })
      .then((response) => response.json())
      .then((json) => {
        json.map((arr) => {
          arr.UserComments?.map((chargingPointID) =>
            setChargingPointID(chargingPointID.ChargePointIDs)
          );
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchChargingStations();
  }, []);

  //onMove fetch Latitude

  return (
    <>
      <Text style={styles.instructions}>Choose charging station</Text>
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
          },
        ]}
      >
        <WebView
          originWhitelist={["*"]}
          source={{
            html: `<iframe style="width:100%;height:80%;margin: 0; padding: 0 frameborder="0 allow="geolocation"
      src="https://map.openchargemap.io/?mode=embedded=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=lilbocheap0a-20&language=en_US&marketplace=amazon&region=US&placement=B0157T1ZK2&asins=B0157T1ZK2&linkId=6cc99550e828f584b5cb20a067edf5f8&show_border=true&link_opens_in_new_window=true"></iframe>`,
          }}
          //onMove={e => updateLocation}
        />
        <Button mode="outlined" onPress={startCharing}>
          Start Charging
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  instructions: {
    color: "#888",
    fontSize: 18,
    marginTop: 50,
    textAlign: "center",
    marginVertical: 5,
  },
  container: {
    flex: 1,
    padding: 30,
  },
});
