import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { EventListScreen } from "screens/EventListScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!!</Text>
      <Text>TODO:nativeBaseを使用して一覧（モック）の作成</Text>
      <EventListScreen />
      <StatusBar style="auto" />
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

registerRootComponent(App);
