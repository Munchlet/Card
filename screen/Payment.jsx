import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
	Dimensions,
	Image,
	PixelRatio,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import PaymentHeader from "../component/PaymentHeader";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f6f9ff",
	},
});

export default function Payment({ navigation }) {
	return (
		<View style={styles.container}>
			<PaymentHeader />
			<Text
				style={{
					fontWeight: "bold",
					marginTop: 20,
					color: "#210d3a",
					marginLeft: 20,
					fontSize: 82 / PixelRatio.get(),
				}}>
				Payment
			</Text>
			<View
				style={{
					flex: 1,
					backgroundColor: "white",
					marginHorizontal: 20,
					borderRadius: 16,
					marginVertical: 20,
				}}>
				<View
					style={{
						marginLeft: 40,
						marginTop: 30,
						flexDirection: "row",
						alignItems: "center",
					}}>
					<Image
						style={{ height: 60, width: 60, borderRadius: 200 }}
						source={{
							uri:
								"https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg",
						}}
					/>
					<View style={{ marginLeft: 20 }}>
						<Text
							style={{
								color: "#39233a",
								fontSize: 60 / PixelRatio.get(),
								fontWeight: "bold",
							}}>
							Emilie Butler
						</Text>
						<Text
							style={{
								color: "#887b89",
								fontSize: 42 / PixelRatio.get(),
								marginTop: 6,
							}}>
							034-56246-0124
						</Text>
					</View>
				</View>

				<View
					style={{
						marginHorizontal: 20,
						marginTop: 30,
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#fafafc",
						padding: 20,
						borderRadius: 20,
					}}>
					<Image
						style={{ height: 60, width: 60 }}
						source={require("../assets/smallcard.png")}
						resizeMode="contain"
					/>
					<View
						style={{
							marginLeft: 20,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							flex: 1,
						}}>
						<View>
							<Text
								style={{
									color: "#62319e",
									fontSize: 60 / PixelRatio.get(),
									fontWeight: "bold",
								}}>
								Travel Card
							</Text>
							<Text
								style={{
									color: "#8f6cba",
									fontSize: 42 / PixelRatio.get(),
								}}>
								Mastercard - 7890
							</Text>
						</View>
						<View>
							<MaterialCommunityIcons
								name="chevron-right"
								size={24}
								color="#62319e"
							/>
						</View>
					</View>
				</View>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						marginTop: 80,
					}}>
					<Text
						style={{
							fontWeight: "bold",
							color: "#3b1a63",
							fontSize: 250 / PixelRatio.get(),
						}}>
						$47.50
					</Text>
				</View>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						marginTop: 20,
					}}>
					<Text style={{ color: "#3b1a63", fontSize: 62 / PixelRatio.get() }}>
						Dinner 🦐🤤
					</Text>
				</View>
				<View
					style={{
						width: "90%",
						backgroundColor: "#efeaf5",
						borderRadius: 14,
						flexDirection: "row",
						alignItems: "center",
						paddingLeft: 20,
						paddingVertical: 10,
						position: "absolute",
						bottom: 20,
						marginHorizontal: 20,
					}}>
					<MaterialCommunityIcons
						name="information"
						size={24}
						color="#62319e"
					/>
					<Text style={{ color: "#62319e", marginLeft: 10 }}>
						Bank fee ($2.50) will be applied
					</Text>
				</View>
			</View>
			<TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
				<View
					style={{
						marginHorizontal: 20,
						borderRadius: 16,
						backgroundColor: "#62319e",
						height: 54,
						width: Dimensions.get("window").width - 40,
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 20,
						elevation: 4,
					}}>
					<Text
						style={{
							color: "white",
							fontSize: 48 / PixelRatio.get(),
						}}>
						Send
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
