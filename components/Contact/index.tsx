import { Flex } from "@chakra-ui/layout";
import SectionHeader from "../shared/SectionHeader";
import ContactForm from "./ContactForm";
import Social from "./Social";
export default function Contact() {
  return (
    <Flex my="20" direction="column">
      <SectionHeader sectionTitle="Let's talk" />
      <ContactForm />
      <Social />
    </Flex>
  );
}
