import { Video } from "expo-av";
import React from "react";
import { View, Image, Text } from "react-native";

// import SampleImage from "../assets/sample.png";

export function LocalImage() {
  return (
    <View
      style={{
        width: 240,
        height: 240,
        backgroundColor: "red",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Image from npm package assets</Text>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        // LOCAL ASSET WORKS AFTER METRO CONFIG UPDATE
        source={require("../assets/sample.png")}
      />
    </View>
  );
}

export function WebImage() {
  return (
    <View
      style={{
        width: 240,
        height: 240,
        backgroundColor: "blue",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Image from Web</Text>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        // URI FROM WEB WORKS
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png",
        }}
      />
    </View>
  );
}

export function LocalVideo() {
  return (
    <View
      style={{
        width: 240,
        height: 240,
        backgroundColor: "green",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Video from Web</Text>
      <Video
        style={{
          width: 200,
          height: 200,
        }}
        useNativeControls
        isLooping
        source={require("../assets/sample.mp4")}
      />
    </View>
  );
}
