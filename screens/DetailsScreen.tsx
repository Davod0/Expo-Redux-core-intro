import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { useAppSelector } from "../hooks";
import { BottomTabParamList } from "../navigators/BottomTabNavigator";
import { StyleSheet } from "react-native";

type Props = NativeStackScreenProps<BottomTabParamList, "Details">;

export default function DetailsScreen(props: Props) {
  const number = useAppSelector((state) => state);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.numberText}>Number: {number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  numberText: {
    fontSize: 22,
    color: "#555",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
