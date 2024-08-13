import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { useState } from "react";
import { View, Text, TextStyle, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ColorTheme from "../constants/themes";
import ImageButton from "./customImageButton";
import { Ionicons } from "@expo/vector-icons";

interface CustomDrawerProps extends DrawerContentComponentProps {
  imageSource: any;
  backgroundColors?: string[];
  textStyle?: TextStyle;
}

export default function CustomDrawer(props: CustomDrawerProps) {
  const {
    imageSource,
    backgroundColors = [
      ColorTheme.colors.colorWhite,
      ColorTheme.colors.bgColorMenu,
    ],
    textStyle,
  } = props;

  const handleBackPress = () => {
    props.navigation.closeDrawer();
  };

  const source = require("../assets/image/back.png");

  const handleProfilePress = () => {
    props.navigation.navigate("Profile");
    // console.log("profil foto")
  };

  const { state, ...rest } = props;
  const [activeItem, setActiveItem] = useState(null);

  const handlePress = (item: any) => {
    setActiveItem(item);
    props.navigation.navigate(item);
  };

  return (
    <LinearGradient style={styles.container} colors={backgroundColors}>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        {/* Drawer Geri Butonu */}
        <View style={styles.backContainer}>
          <ImageButton
            source={source}
            onPress={handleBackPress}
            viewStyle={styles.backImage}
          />
        </View>
        {/* Profile Image ve Text */}
        <View style={styles.profileImageContainer}>
          <ImageButton
            onPress={handleProfilePress}
            source={imageSource}
            viewStyle={styles.profileImage}
          >
            <Text style={[styles.text, textStyle]}>Lorem Ipsum</Text>
          </ImageButton>
        </View>

        <DrawerItemList
          {...props}
          state={{
            ...props.state, // Mevcut navigasyon durumu (state) yayılıyor
            routes: props.state.routes.filter(
              (
                route // ProfileScreen ve Settings rotaları hariç tutuluyor
              ) => route.name !== "Settings" && route.name !== "Profile"
            ),
          }}
        />
      </DrawerContentScrollView>
      <DrawerItem
        label="Ayarlar"
        labelStyle={{ color: ColorTheme.colors.text1 }}
        icon={({ size }) => (
          <Ionicons
            name="settings-outline"
            size={size}
            color={ColorTheme.colors.text1}
          />
        )}
        onPress={() => handlePress("Settings")}
        style={[
          styles.drawerItem,
          activeItem === "Settings" && styles.activeDrawerItem,
        ]}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 15,
    marginBottom: 20,
  },
  backImage: {
    width: 25,
    height: 25,
  },
  profileImageContainer: {
    marginBottom: 30,
  },
  profileImage: {
    height: 130,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 18,
    top: 10,
    color: ColorTheme.colors.text1, // profil ismi
  },
  drawerItem: {
    marginBottom: 30,
    marginLeft: 15,
  },
  activeDrawerItem: {
    backgroundColor: ColorTheme.colors.colorMenu,
  },
});
