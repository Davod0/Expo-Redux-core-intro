import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Setting">;

export default function SettingScreen(props: Props) {
  return (
    <View>
      <Text>Setting Screen</Text>
      <Text>User name: {props.route.params.userName}</Text>
    </View>
  );
}
