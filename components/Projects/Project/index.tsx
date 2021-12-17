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

interface ProjectProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    stack: string[];
    githubLink: string;
    liveLink: string;
  };
}

export default function Project({ project }: ProjectProps) {
  const { primary, secondary } = useColorModePreferences();
  const { title, subtitle, description, stack, githubLink, liveLink } = project;

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
            {title}: <br />
            {subtitle}
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
            {description}
          </Text>
          <Flex
            as={Link}
            justify="center"
            align="center"
            placeSelf="end"
            fontWeight="700"
            fontFamily="Roboto"
            color={primary}
            href={liveLink}
            isExternal
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
            href={githubLink}
            isExternal
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
          {stack.map((tech) => (
            <ListItem key="tech">
              <ListIcon as={ImRadioChecked2} />
              {tech}
            </ListItem>
          ))}
        </List>
      </GridItem>
    </Grid>
  );
}
