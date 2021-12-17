import { Flex } from "@chakra-ui/react";
import HDivider from "../shared/HDivider";
import Project from "./Project";
import SectionHeader from "../shared/SectionHeader";

export default function Projects() {
  return (
    <Flex my="20" direction="column">
      <SectionHeader sectionTitle="Portfolio" />
      <Project />
      <HDivider />
      <Project />
      <HDivider />
      <Project />
    </Flex>
  );
}
