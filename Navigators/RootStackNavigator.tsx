import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigator } from "./BottomTabNavigator";
import SettingScreen from "../screens/SettingScreen";

export type RootStackParamList = {
  Setting: { userName: string };
  BottomTabNavigator: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Setting" component={SettingScreen} />
    </RootStack.Navigator>
  );
}
