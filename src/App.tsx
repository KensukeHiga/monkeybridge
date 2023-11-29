import { ToggleDarkMode } from "components/molecules/ToggleDarkMode";
import { NotificationBanner } from "components/organisms/NotificationBanner";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider, View, useColorMode } from "native-base";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EventListScreen } from "screens/EventListScreen";
import customTheme from "styles/customTheme";

/**
 * 起点となるもの
 * @returns App
 */
export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Root />
    </NativeBaseProvider>
  );
}

/**
 * NativeBaseProviderが提供する機能（useColorMode）を使用するためSafeAreaView以下をrootに分離した。
 * @returns Root
 */
const Root = () => {
  const { colorMode } = useColorMode();
  const bgColor =
    colorMode === "dark"
      ? customTheme.colors.dark.background
      : customTheme.colors.light.background;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: bgColor,
      }}
    >
      <View>
        <Box style={styles.headerContainer}>
          <Box style={{ flex: 1 }} /> {/* 空のBoxで左側のスペースを作成 */}
          <ToggleDarkMode />
        </Box>
        <NotificationBanner />
        <EventListScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10, // 適宜調整
    width: "100%",
  },
});

registerRootComponent(App);
