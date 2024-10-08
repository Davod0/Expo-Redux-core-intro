import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { useAppSelector } from "../hoks";
import { BottomTabParamList } from "../navigators/BottomTabNavigator";

type Props = NativeStackScreenProps<BottomTabParamList, "Details">;

export default function DetailsScreen(props: Props) {
  const number = useAppSelector((state) => state);
  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Number: {number}</Text>
    </View>
  );
}
