import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { BottomTabParamList } from "../navigators/BottomTabNavigator";

type Props = NativeStackScreenProps<BottomTabParamList, "Home">;

export default function HomeScreen(props: Props) {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
