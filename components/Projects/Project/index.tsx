import {
  Center,
  Grid,
  GridItem,
  Text,
  List,
  ListIcon,
  ListItem,
  Heading,
  Link,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { ImRadioChecked2, ImLink, ImGithub } from "react-icons/im";
import { useColorModePreferences } from "../../../lib/colorModePreferencesContext";

export default function Project() {
  const { primary, secondary } = useColorModePreferences();

  return (
    <Grid
      gridTemplateAreas={[
        "'image' 'about' 'stack'",
        "'image' 'about' 'stack'",
        "'image about stack'",
      ]}
      gap="30px"
      mx={["20px", "25px", "30px", "100px"]}
    >
      <GridItem gridArea="image">
        {/* <Image src="example.png" alt="Project 1" /> */}
        <Center my="auto" h="100%">
          <Heading fontFamily="Bebas Neue" textAlign="center" color={primary}>
            Upfi: <br />
            image upload website
          </Heading>
        </Center>
      </GridItem>
      <GridItem gridArea="about" h="100%">
        <Flex direction="column" h="100%">
          <Heading fontFamily="Bebas Neue" mb="10px" color={primary}>
            Summary
          </Heading>

          <Text
            textAlign="justify"
            mb="10px"
            fontFamily="Roboto"
            color={secondary}
          >
            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
            disputationi eu sit. Vide electram sadipscing et per. Per aumento de
            cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im
            ampola pa arma uma pindureta.
          </Text>
          <Flex
            as={Link}
            justify="center"
            align="center"
            placeSelf="end"
            fontWeight="700"
            fontFamily="Roboto"
            color={primary}
          >
            <Icon as={ImLink} mr="3px" />
            Live version
          </Flex>
          <Flex
            as={Link}
            justify="center"
            align="center"
            placeSelf="end"
            fontWeight="700"
            fontFamily="Roboto"
            color={primary}
          >
            <Icon as={ImGithub} mr="3px" />
            Github Repo
          </Flex>
        </Flex>
      </GridItem>
      <GridItem gridArea="stack">
        <Heading fontFamily="Bebas Neue" mb="10px" color={primary}>
          Stack
        </Heading>
        <List spacing={3} color={secondary}>
          <ListItem>
            <ListIcon as={ImRadioChecked2} />
            NextJS
          </ListItem>
          <ListItem>
            <ListIcon as={ImRadioChecked2} />
            ReactJS
          </ListItem>
          <ListItem>
            <ListIcon as={ImRadioChecked2} />
            TypeScript
          </ListItem>
          <ListItem>
            <ListIcon as={ImRadioChecked2} />
            FaunaDB
          </ListItem>
        </List>
      </GridItem>
    </Grid>
  );
}
