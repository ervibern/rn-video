import { StyleSheet, Text, View } from "react-native";
import * as RnVideo from "rn-video";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{RnVideo.hello()}</Text>

      {/* COMPONENTS FROM RN-VIDEO PACKAGE */}
      <RnVideo.LocalImage />
      <RnVideo.WebImage />
      <RnVideo.LocalVideo />
      {/* ------------------------------- */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
