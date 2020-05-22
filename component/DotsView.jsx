import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
	},
	dot: {
		height: 10,
		width: 10,
		backgroundColor: "#cccbd4",
		borderRadius: 20,
		marginHorizontal: 4,
	},
});

export default function DotsView({ style = {}, count, active }) {
	return (
		<View style={[styles.container, style]}>
			{new Array(count).fill(0).map((dot, i) => {
				if (i === active) return <View key={i} style={[styles.dot, { backgroundColor: "#6cd4c4" }]} />;
				return <View key={i} style={styles.dot} />;
			})}
		</View>
	);
}
