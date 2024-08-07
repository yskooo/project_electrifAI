import { Button, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useSession } from "../../ctx";

export default function TabOneScreen() {

  const { session } = useSession();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text>Welcome, {session}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});