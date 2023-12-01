import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { registerRootComponent } from "expo";
import { NativeBaseProvider, StatusBar } from "native-base";
import { EventListScreen } from "screens/EventListScreen";
import { QuickSearchScreen } from "screens/QuickSearchScreen";
import customTheme from "styles/customTheme";

const queryClient = new QueryClient();
type DrawerParamList = {
  Events: undefined; // 他のルートも必要に応じて追加
  Search: undefined;
};
const Drawer = createDrawerNavigator<DrawerParamList>();

/**
 * 起点となるもの
 * @returns App
 */
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={customTheme}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Events"
            drawerContent={() => <QuickSearchScreen />}
          >
            <Drawer.Screen name="Events" component={EventListScreen} />
            {/* <Drawer.Screen name="Search" component={QuickSearchScreen} /> */}
          </Drawer.Navigator>
          <StatusBar />
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}

registerRootComponent(App);
