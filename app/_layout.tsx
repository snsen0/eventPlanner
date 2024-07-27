import "react-native-gesture-handler";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "../components/customDrawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => (
          <CustomDrawer
            {...props}
            imageSource={require("../assets/image/profilePhoto.png")}
            // imageStyle={{width: 80}}
            // backgroundColors = ['#fceed6', '#ffecb3'],
            // textStyle={styles.}
          />
        )}
        screenOptions={{
          // drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: "#FFEDCC",
          drawerActiveTintColor: "#0F0E0E",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Etkinlik",
            drawerLabelStyle: { color: "#0F0E0E" },
            title: "",
            drawerIcon: ({ size }) => (
              <Ionicons name="calendar-outline" size={size} color={"#0F0E0E"} />
            ),
          }}
        />
        <Drawer.Screen
          name="profil"
          options={{
            drawerLabel: "Profil",
            drawerLabelStyle: { color: "#0F0E0E" },
            title: "",
          }}
        />
        <Drawer.Screen
          name="takvim"
          options={{
            drawerLabel: "Takvim",
            drawerLabelStyle: { color: "#0F0E0E" },
            title: "",
            drawerIcon: ({ size }) => (
              <Ionicons
                name="calendar-number-outline"
                size={size}
                color={"#0F0E0E"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="bilet"
          options={{
            drawerLabel: "Bilet",
            drawerLabelStyle: { color: "#0F0E0E" },
            title: "",
            drawerIcon: ({ size }) => (
              <Ionicons name="ticket-outline" size={size} color={"#0F0E0E"} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
