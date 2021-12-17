import { Flex } from "@chakra-ui/react";
import HDivider from "../shared/HDivider";
import Project from "./Project";
import SectionHeader from "../shared/SectionHeader";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  githubLink: string;
  liveLink: string;
}

const PROJECTS: Project[] = [
  {
    title: "Lia Motta",
    subtitle: "a personal website/store",
    description:
      "A personal website I developed for the content creator Lia Motta. Through her website, it is possible to get to know more about her, to get in touch using the contact form, and to take a look and buy any of her digital products, as well as find her at all the social networks she creates for.",
    stack: ["Next.Js", "Prismic (CMS)", "Typescript", "Node.Js"],
    githubLink: "https://github.com/hugolacerdar/lia_motta_website",
    liveLink: "https://www.liamotta.com/",
  },
  {
    title: "READNEXT",
    subtitle: "a social blogging platform",
    description:
      "A social blogging platform similar to DEV.to, where members can create content under their custom and unique username and publish it publicly, while readers can like posts in realtime.",
    stack: ["Next.Js", "Firebase", "Firestore", "Typescript", "Node.Js"],
    githubLink: "https://github.com/hugolacerdar/readnext-app",
    liveLink: "https://google.com/",
  },
];

export default function Projects() {
  return (
    <Flex my="20" direction="column">
      <SectionHeader sectionTitle="Portfolio" />
      {PROJECTS.map((project) => (
        <>
          <Project project={project} key={project.githubLink} />
          <HDivider />
        </>
      ))}
    </Flex>
  );
}
