import { Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { useColorModePreferences } from "../../../lib/colorModePreferencesContext";
import Bio from "./Bio";

export default function Name() {
  const { primary, highlight } = useColorModePreferences();

  const fullstack = "FULL STACK".split("");
  const web = "web".split("");
  const developer = "DEVELOPER".split("");

  const headingSizes = ["6.5rem", "9rem", "12rem", "12rem", "16rem"];
  return (
    <Grid
      gridTemplateAreas={[
        "'fullstack fullstack' 'developer developer' 'bio bio'",
        "'fullstack' 'developer' 'bio'",
        "'fullstack' 'developer' 'bio'",
        "'fullstack fullstack fullstack web' 'developer developer developer bio'",
      ]}
    >
      <Heading
        color={primary}
        fontFamily="Bebas Neue"
        fontSize={headingSizes}
        gridArea="fullstack"
      >
        {fullstack.map((part) => (
          <Text as="span" _hover={{ color: highlight }} transition="color 0.5s">
            {part}
          </Text>
        ))}
      </Heading>
      <Heading
        color={primary}
        fontFamily="Bebas Neue"
        fontSize={headingSizes}
        gridArea="web"
        display={["none", "none", "none", "block"]}
      >
        &nbsp;
        {web.map((part) => (
          <Text as="span" _hover={{ color: highlight }} transition="color 0.5s">
            {part}
          </Text>
        ))}
      </Heading>
      <Heading
        color={primary}
        fontFamily="Bebas Neue"
        fontSize={headingSizes}
        gridArea="developer"
      >
        {developer.map((part) => (
          <Text as="span" _hover={{ color: highlight }} transition="color 0.5s">
            {part}
          </Text>
        ))}
      </Heading>
      <GridItem gridArea="bio" pt="36px" mx="20px">
        <Bio />
      </GridItem>
    </Grid>
  );
}
