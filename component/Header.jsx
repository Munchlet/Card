import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginTop: Constants.statusBarHeight + 20,
		marginHorizontal: 20,
		alignItems: "center",
	},
});

export default function Header() {
	return (
		<View style={styles.container}>
			<MaterialIcons style={{ marginTop: 4 }} name="keyboard-arrow-left" size={24} color="#58cfbe" />
			<Text style={{ marginLeft: 8, color: "#58cfbe", fontSize: 68 / PixelRatio.get() }}>Back</Text>
		</View>
	);
}
