import React from "react";
import { useColorMode, Switch, HStack, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons"; // アイコンライブラリは適宜変更してください

export const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <HStack alignItems="center" space={2}>
      <Icon
        as={Ionicons}
        name="sunny"
        size="sm"
        color={isDarkMode ? "gray.500" : "yellow.400"}
      />
      <Switch isChecked={isDarkMode} onToggle={toggleColorMode} />
      <Icon
        as={Ionicons}
        name="moon"
        size="sm"
        color={isDarkMode ? "purple.500" : "gray.500"}
      />
    </HStack>
  );
};
