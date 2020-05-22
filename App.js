import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screen/Home";
import Payment from "./screen/Payment";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				headerMode="none"
				options={{ headerShown: false }}
				initialRouteName="PaymentScreen">
				<Stack.Screen name="PaymentScreen" component={Payment} />
				<Stack.Screen name="HomeScreen" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
