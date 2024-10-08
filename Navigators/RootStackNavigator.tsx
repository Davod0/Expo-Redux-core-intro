import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/SettingScreen";

export type RootStackParamList = {
  Setting: { userName: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Setting"
        component={HomeScreen}
        initialParams={{ userName: "Davod" }}
      />
    </RootStack.Navigator>
  );
}
