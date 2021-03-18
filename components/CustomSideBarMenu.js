import * as React from "react";
import * as Permissions from "expo-permissions";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import firebase from "firebase";
import db from "../config";

export default class CustomSideBarMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      name: "",
      docId: "",
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.5,

            alignItems: "center",
            backgroundColor: "orange",
          }}
        >
          <Text style={{ fontWeight: "100", fontSize: 20, paddingTop: 10 }}>
            {this.state.name}
          </Text>
        </View>

        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}></DrawerItems>
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity
            style={styles.logOutButton}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
              firebase.auth().signOut();
            }}
          >
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItemsContainer: {
    flex: 0.8,
  },
  logOutContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  logOutButton: {
    height: 30,
    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  logOutText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 0.75,
    width: "40%",
    height: "20%",
    marginLeft: 5,
    marginTop: 60,
    borderRadius: 100,
  },
});
