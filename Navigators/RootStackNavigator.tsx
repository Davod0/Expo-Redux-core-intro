import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamList = {
  Setting: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Setting" component={HomeScreen} />
    </RootStack.Navigator>
  );
}
