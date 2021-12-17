import { Text, Box, Flex } from "@chakra-ui/react";
import { useColorModePreferences } from "../../lib/colorModePreferencesContext";
import ColorModeSwitch from "./ColorModeSwitch";

export default function Header() {
  const { primary, secondary } = useColorModePreferences();

  return (
    <Flex width="100%" justify="flex-end">
      <Box my="3" mx="4">
        <Text as="strong" color={primary}>
          HUGO LACERDA'S WEBSITE
        </Text>
        <Text color={secondary}>currently unavailable for work</Text>
      </Box>
      <Box my="3" mx="4">
        <ColorModeSwitch />
      </Box>
    </Flex>
  );
}
