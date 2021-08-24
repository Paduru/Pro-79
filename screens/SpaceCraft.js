import React from "react";
import { View, StyleSheet, Text } from "react-native";

function SpaceCraftScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Space Craft Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default SpaceCraftScreen;
