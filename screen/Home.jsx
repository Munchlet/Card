import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, FlatList, PixelRatio, StyleSheet, Text, View } from "react-native";
import CCView from "../component/CCView";
import DotsView from "../component/DotsView";
import Header from "../component/Header";
import TransactionItem from "../component/TransactionItem";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2f5fb",
	},
	drawer: {
		flex: 6,
		borderTopLeftRadius: 52,
		borderTopRightRadius: 52,
		backgroundColor: "white",
		elevation: 5,
	},
	transactionView: {
		flexDirection: "row",
		marginTop: 18,
		marginHorizontal: 28,
		justifyContent: "space-between",
		alignItems: "center",
	},
	transactionText: {
		fontSize: 68 / PixelRatio.get(),
		fontWeight: "bold",
		color: "#382239",
	},
	transactionSort: {
		fontSize: 52 / PixelRatio.get(),
		color: "#382239",
	},
});

export default function Home() {
	const [cards] = React.useState([
		{
			cvc: "123",
			expiry: "05/21",
			name: "Peter Hanks",
			number: "4929595707534995",
			brand: require("../assets/icons/stp_card_mastercard.png"),
			card: require("../assets/card1.png"),
		},
		{
			cvc: "456",
			expiry: "01/23",
			name: "Peter Hanks",
			number: "5468889650194012",
			brand: require("../assets/icons/stp_card_amex.png"),
			card: require("../assets/card2.png"),
		},
		{
			cvc: "789",
			expiry: "07/28",
			name: "Peter Hanks",
			number: "6011736951922254",
			brand: require("../assets/icons/stp_card_visa.png"),
			card: require("../assets/card3.png"),
		},
	]);

	const [transactions] = React.useState([
		{
			img: "https://pbs.twimg.com/profile_images/1154092629/Square__small_.jpg",
			name: "Miguel Walters",
			type: 1,
			amt: "127.70",
		},
		{
			img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg",
			name: "Adelaide Perry",
			type: 0,
			amt: "345",
		},
		{
			img:
				"https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg",
			name: "Emilie Butler",
			type: 0,
			amt: "37.45",
		},
	]);

	return (
		<View style={styles.container}>
			<Header />
			<FlatList
				snapToInterval={Dimensions.get("window").width - 40}
				decelerationRate={50}
				snapToAlignment="start"
				showsHorizontalScrollIndicator={false}
				style={{ padding: 20, marginTop: 40, height: 200 }}
				horizontal={true}
				data={cards}
				keyExtractor={(card) => card.cvc}
				renderItem={({ item }) => (
					<View style={{ flex: 1, marginRight: 20 }}>
						<CCView {...item} style={{ width: Dimensions.get("window").width - 60, height: 220 }} />
					</View>
				)}
			/>

			<DotsView count={3} active={0} style={{ marginBottom: 40, marginTop: 20 }} />
			<View style={styles.drawer}>
				<View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 12 }}>
					<MaterialIcons name="keyboard-arrow-up" size={24} color="#39233a85" />
				</View>
				<View style={styles.transactionView}>
					<Text style={styles.transactionText}>Transactions</Text>
					<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
						<Text style={styles.transactionSort}>Sort by </Text>
						<Text style={{ fontSize: 52 / PixelRatio.get(), color: "#382239", fontWeight: "bold" }}>Recent</Text>
						<MaterialIcons name="keyboard-arrow-down" size={20} color="#382239" style={{ marginTop: 4 }} />
					</View>
				</View>
				<View>
					{transactions.map((transaction) => (
						<TransactionItem {...transaction} key={transaction.name} />
					))}
				</View>
			</View>
		</View>
	);
}
