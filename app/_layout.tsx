import "react-native-gesture-handler";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "../components/customDrawer";
import ColorTheme from "../constants/themes";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => (
          <CustomDrawer
            {...props}
            imageSource={require("../assets/image/profilePhoto.png")}
            // backgroundColors = ['#fceed6', '#ffecb3'],
            // textStyle
          />
        )}
        screenOptions={{
          // drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: ColorTheme.colors.colorMenu,
          drawerActiveTintColor: ColorTheme.colors.text1,
          // headerShown: false,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Etkinlik",
            drawerLabelStyle: { color: ColorTheme.colors.text1 },
            // headerShown: false,
            drawerIcon: ({ size }) => (
              <Ionicons name="calendar-outline" size={size} color={ColorTheme.colors.text1} />
            ),
          }}
        />
        <Drawer.Screen
          name="CalendarScreen"
          options={{
            drawerLabel: "Takvim",
            drawerLabelStyle: { color: ColorTheme.colors.text1 },
            // headerShown: false,
            drawerIcon: ({ size }) => (
              <Ionicons
                name="calendar-number-outline"
                size={size}
                color={ColorTheme.colors.text1}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="TicketScreen"
          options={{
            drawerLabel: "Bilet",
            drawerLabelStyle: { color: ColorTheme.colors.text1 },
            // headerShown: false,
            drawerIcon: ({ size }) => (
              <Ionicons name="ticket-outline" size={size} color={ColorTheme.colors.text1} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
