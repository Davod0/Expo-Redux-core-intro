import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../hooks";
import { BottomTabParamList } from "../navigators/BottomTabNavigator";
import { RootState } from "../store/Store";

type Props = NativeStackScreenProps<BottomTabParamList, "Details">;

export default function DetailsScreen(props: Props) {
  const userState = useAppSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <View style={styles.detailsBox}>
        <Text style={styles.detailText}>First Name: {userState.firstName}</Text>
        <Text style={styles.detailText}>Last Name: {userState.lastName}</Text>
        <Text style={styles.detailText}>Age: {userState.age}</Text>
      </View>
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
    marginBottom: 30,
  },
  detailsBox: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "center",
  },
  detailText: {
    fontSize: 20,
    color: "#444",
    marginBottom: 10,
  },
});
