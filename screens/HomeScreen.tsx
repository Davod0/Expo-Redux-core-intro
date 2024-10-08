import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "../hooks";
import { BottomTabParamList } from "../navigators/BottomTabNavigator";
import { StyleSheet } from "react-native";

type Props = NativeStackScreenProps<BottomTabParamList, "Home">;

export default function HomeScreen(props: Props) {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.title}>See the result on details screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: "INCREMENT", payload: 400 })}
      >
        <Text style={styles.buttonText}>Increase with 400</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.decreaseButton]}
        onPress={() => dispatch({ type: "DECREAMENT", payload: 400 })}
      >
        <Text style={styles.buttonText}>Decrease with 400</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    width: "70%",
    alignItems: "center",
  },
  decreaseButton: {
    backgroundColor: "#F44336",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
