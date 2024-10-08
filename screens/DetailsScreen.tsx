import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { BottomTabParamList } from "../navigators/BottomTabNavigator";

type Props = NativeStackScreenProps<BottomTabParamList, "Details">;

export default function DetailsScreen(props: Props) {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}
