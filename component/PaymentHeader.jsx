import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginTop: Constants.statusBarHeight + 20,
		marginHorizontal: 12,
		alignItems: "center",
		justifyContent: "space-between",
	},
});

export default function PaymentHeader() {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<MaterialIcons
					style={{ marginTop: 4 }}
					name="keyboard-arrow-left"
					size={24}
					color="#58cfbe"
				/>
				<Text
					style={{
						marginLeft: 8,
						color: "#58cfbe",
						fontSize: 68 / PixelRatio.get(),
					}}>
					Back
				</Text>
			</View>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<MaterialIcons
					name="insert-link"
					size={24}
					color="#33cab3"
					style={{ marginRight: 20 }}
				/>
				<MaterialCommunityIcons name="qrcode-scan" size={24} color="#33cab3" />
			</View>
		</View>
	);
}
