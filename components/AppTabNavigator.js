import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import ExchangeScreen from "../screens/ExchangeScreen";

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  ExchangeScreen: {
    screen: ExchangeScreen,
  },
});
