import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		margin: 20,
		alignItems: "center",
	},
	img: {
		height: 60,
		width: 60,
		borderRadius: 30,
	},
	mid: {
		marginLeft: 20,
	},
	name: {
		color: "#39233a",
		fontSize: 52 / PixelRatio.get(),
	},
	amt: {
		color: "#39233a",
		fontSize: 68 / PixelRatio.get(),
		fontWeight: "400",
	},
	sent: {},
});

export default function TransactionItem({ name, type, amt, img }) {
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={{ uri: img }} />
			<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 }}>
				<View style={styles.mid}>
					<Text style={styles.name}>{name}</Text>
					{type === 0 ? (
						<View
							style={{
								width: 100,
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#e9f9f7",
								borderRadius: 20,
								padding: 4,
								marginTop: 4,
							}}>
							<View
								style={{
									backgroundColor: "#24cbb1",
									borderRadius: 16,
									height: 20,
									width: 20,
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Feather name="arrow-down-left" size={14} color="white" />
							</View>
							<Text style={{ marginLeft: 10, color: "#3fd2bb" }}>Received</Text>
						</View>
					) : (
						<View
							style={{
								width: 80,
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#ffedee",
								borderRadius: 20,
								padding: 4,
								marginTop: 4,
							}}>
							<View
								style={{
									backgroundColor: "#fe4a54",
									borderRadius: 16,
									height: 20,
									width: 20,
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Feather name="arrow-up-right" size={14} color="white" />
							</View>
							<Text style={{ marginLeft: 10, color: "#fe4a54" }}>Sent</Text>
						</View>
					)}
				</View>
				<Text style={styles.amt}>{`$${amt}`}</Text>
			</View>
		</View>
	);
}
