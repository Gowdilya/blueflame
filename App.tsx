import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import useBLE from "./useBLE";

const App = () => {
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    heartRate,
    disconnectFromDevice,
  } = useBLE();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const DisplayDevices = () => {
    return (
      <ScrollView style={styles.list}>
        {allDevices.map((device, index) => {
          return (
            <View key={index} style={styles.device}>
              <Text> id:{device.id}</Text>
              <Text> localName:{device.localName}</Text>
              <Text> Name:{device.name}</Text>
              <Text>servciceUUIDs:{device.serviceUUIDs}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Button
        title="Press me"
        onPress={() => {
          Alert.alert("button pressed!");
          scanForPeripherals();
        }}
      />
      {DisplayDevices()}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    maxHeight: "40%",
  },
  device: {
    backgroundColor: "beige",
    borderWidth: 5,
  },
});

export default App;
