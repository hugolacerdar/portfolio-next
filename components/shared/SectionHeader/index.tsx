import { Flex, Heading } from "@chakra-ui/layout";
import { useColorModePreferences } from "../../../lib/colorModePreferencesContext";

interface SectionHeaderProps {
  sectionTitle: string;
}

export default function SectionHeader({ sectionTitle }: SectionHeaderProps) {
  const { primary } = useColorModePreferences();
  return (
    <Flex w="100%" justifyContent="flex-end" px="30px" mb="30px">
      <Heading fontFamily="Bebas Neue" fontSize="40px" color={primary}>
        {sectionTitle}
      </Heading>
    </Flex>
  );
}
