import { Text } from "@chakra-ui/react";
import { useColorModePreferences } from "../../../../lib/colorModePreferencesContext";

export default function Bio() {
  const { primary, secondary } = useColorModePreferences();

  const title = primary;
  const body = secondary;

  return (
    <>
      <Text
        color={body}
        fontFamily="Roboto"
        lineHeight="1.5"
        fontSize={["1rem", "1.125rem"]}
        mr="auto"
        textAlign="justify"
      >
        <Text as="strong" color={title} mr="2">
          ABOUT
        </Text>
        I am a developer based in São Paulo, Brazil. I truly value knowledge
        exchange, both to learn and to teach, and not only in a professional
        context. Whether it's inventing a new recipe in the kitchen, playing a
        board game, or solving a client’s problem, I always do my best to find
        the ideal solution.
      </Text>
    </>
  );
}
