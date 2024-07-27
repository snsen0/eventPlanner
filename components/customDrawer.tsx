import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import {
  View,
  Image,
  Text,
  ImageStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface CustomDrawerProps extends DrawerContentComponentProps {
  imageSource: any;
  imageStyle?: ImageStyle;
  backgroundColors?: string[];
  textStyle?: TextStyle;
}

export default function CustomDrawer(props: CustomDrawerProps) {
  const {
    imageSource,
    imageStyle,
    backgroundColors = ["#ffffff", "#fceed6"],
    textStyle,
  } = props;
  return (
    <LinearGradient style={styles.container} colors={backgroundColors}>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <View style={styles.imageContainer}>
          <Image style={[styles.image, imageStyle]} source={imageSource} />
          <Text style={[styles.text, textStyle]}>Lorem Ipsum</Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 18,
    paddingTop: 10,
    color: "#0F0E0E",
  },
});
