import { Icon, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ImSun, ImBrightnessContrast } from "react-icons/im";
import { useColorModePreferences } from "../../../lib/colorModePreferencesContext";

export default function ColorModeSwitch() {
  const { toggleColorMode } = useColorMode();
  const { primary, highlight } = useColorModePreferences();
  const icon = useColorModeValue(ImBrightnessContrast, ImSun);

  return (
    <>
      <Text onClick={toggleColorMode} cursor="pointer" fontSize="1.5rem">
        <Icon
          as={icon}
          color={primary}
          transition="color 1s"
          _hover={{ color: highlight }}
        />
      </Text>
    </>
  );
}
