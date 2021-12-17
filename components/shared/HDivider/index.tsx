import { Box } from "@chakra-ui/react";
import { useColorModePreferences } from "../../../lib/colorModePreferencesContext";

export default function HDivider() {
  const { primary } = useColorModePreferences();

  return (
    <Box w={["60px", "90px"]} mx="auto" h="2px" bg={primary} my={["9", "20"]} />
  );
}
