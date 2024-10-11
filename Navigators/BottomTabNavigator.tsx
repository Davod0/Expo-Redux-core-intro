import Fontisto from "@expo/vector-icons/Fontisto";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "../screens/DetailsScreen";
import { HomeScreen } from "../screens/HomeScreen";

export type BottomTabParamList = {
  Home: undefined;
  Details: undefined;
};

const BTabNavigator = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  return (
    <BTabNavigator.Navigator
      screenOptions={({ navigation, route }) => ({
        headerRight: () => (
          <Fontisto
            style={{ marginRight: 15 }}
            name="player-settings"
            size={24}
            color="black"
            onPress={() =>
              navigation.navigate("Setting", { userName: "Davod" })
            }
          />
        ),
      })}
    >
      <BTabNavigator.Screen name="Home" component={HomeScreen} />
      <BTabNavigator.Screen name="Details" component={DetailsScreen} />
    </BTabNavigator.Navigator>
  );
}
