import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign"; // arrow icon

const data = [
  { label: "Beauty", value: "beauty" },
  { label: "Fashion", value: "fashion" },
  { label: "Skincare", value: "skincare" },
];

const CustomDropdown = () => {
  const [value, setValue] = useState<string | null>(null);

  const handleSelection = (item: { label: string; value: string }) => {
    setValue(item.value);
    console.log("Selected:", item.value);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Apply Filter"
        value={value}
        onChange={handleSelection}
        renderRightIcon={() => (
          <AntDesign style={styles.icon} color="black" name="down" size={14} />
        )}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    width: "35%",
  },
  dropdown: {
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  placeholderStyle: {
    fontSize: 14,
    color: "#999",
  },
  selectedTextStyle: {
    fontSize: 14,
    color: "#333",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    marginRight: 5,
  },
});
