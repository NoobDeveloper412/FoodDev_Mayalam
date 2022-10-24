import { Text, StyleSheet, View, StatusBar, Image } from "react-native";
import React from "react";
import { Colors, Fonts, Images } from "../constants";
import Display from "../utils/Display";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image
        source={Images.PLATE}
        resizeMethod="contain"
        style={styles.image}
      />
      <Text style={styles.titleText}>MayalamFood</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image: {
    height: Display.setHeight(60),
    width: Display.setWidth(60),
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    // fontFamily: Fonts.POPPINS_EXTRA_BOLD,
  },
});
export default SplashScreen;
