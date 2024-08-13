import React from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  TextStyle,
  ViewStyle,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface ImageButtonProps {
  children?: React.ReactNode;
  title?: string;
  onPress: () => void;
  source?: ImageSourcePropType;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const ImageButton = ({
  children,
  title,
  onPress,
  source,
  viewStyle,
  textStyle,
}: ImageButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.imageButton, viewStyle]}>
      <Image source={source} style={styles.image} resizeMode="contain" />
      {title && <Text style={textStyle}>{title}</Text>}
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageButton: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
});

export default ImageButton;
