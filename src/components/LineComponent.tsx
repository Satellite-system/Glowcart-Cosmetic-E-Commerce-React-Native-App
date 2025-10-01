import { View, StyleSheet } from "react-native";
import React from "react";

type LineComponentProps = {
  type: "horizontal" | "vertical";
};

const LineComponent: React.FC<LineComponentProps> = ({ type }) => {
  return (
    <View
      style={[
        styles.base,
        type === "horizontal" ? styles.horizontal : styles.vertical,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: "#333333",
  },
  horizontal: {
    width: "100%",
    height: 0.4,
  },
  vertical: {
    width: 0.4,
    height: "100%",
  },
});

export default LineComponent;
