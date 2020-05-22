import React from "react";
import { Image, ImageBackground, PixelRatio, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
	container: {
		elevation: 4,
	},
	type: {
		position: "absolute",
		right: 10,
		bottom: 20,
	},
	number: {
		position: "absolute",
		top: "42%",
		left: 28,
		color: "white",
		fontSize: 52 / PixelRatio.get(),
	},
	name: {
		position: "absolute",
		bottom: "12%",
		left: 28,
		color: "white",
		fontSize: 102 / PixelRatio.get(),
	},
});

export default function CCView({ style, card, brand }) {
	return (
		<ImageBackground style={[styles.container, style]} source={card} imageStyle={{ borderRadius: 25 }}>
			<Text style={styles.number}>5412 •••• •••• 7890</Text>
			<Image source={brand} style={styles.type} resizeMode="cover" />
			<Text style={styles.name}>$3,578.09</Text>
		</ImageBackground>
	);
}
