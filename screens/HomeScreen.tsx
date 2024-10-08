import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { useAppDispatch } from "../hoks";
import { BottomTabParamList } from "../navigators/BottomTabNavigator";

type Props = NativeStackScreenProps<BottomTabParamList, "Home">;

export default function HomeScreen(props: Props) {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Increase with 400"
        onPress={() => dispatch({ type: "INCREMENT", payload: 400 })}
      />
      <Button
        title="Decrease with 400"
        onPress={() => dispatch({ type: "DECREAMENT", payload: 400 })}
      />
    </View>
  );
}
