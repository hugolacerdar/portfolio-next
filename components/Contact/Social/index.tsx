import { HStack, Link, Icon, Text, Flex } from "@chakra-ui/react";
import { ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";
import { useColorModePreferences } from "../../../lib/colorModePreferencesContext";

export default function Social() {
  const { primary, secondary } = useColorModePreferences();

  const socialLinks = [
    {
      title: "Github",
      icon: ImGithub,
      url: "https://github.com/hugolacerdar",
    },
    {
      title: "LinkedIn",
      icon: ImLinkedin2,
      url: "https://www.linkedin.com/in/hugo-lacerda-rocha/",
    },
    {
      title: "Twitter",
      icon: ImTwitter,
      url: "https://twitter.com/hugolacerdar",
    },
  ];

  return (
    <HStack mx="auto" spacing="40px" mt="40px">
      {socialLinks.map((link) => (
        <Flex
          align="center"
          cursor="pointer"
          as={Link}
          href={link.url}
          _hover={{ textDecoration: "none" }}
          key={link.url}
        >
          <Icon as={link.icon} mr="10px" color={primary} />
          <Text as="span" color={secondary}>
            {link.title}
          </Text>
        </Flex>
      ))}
    </HStack>
  );
}
