import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Element } from "react-scroll";
import SectionTitle from "../SectionTitle";
import SkillCard from "../SkillCard";

import { MdOutlineDesignServices } from "react-icons/md";
import { FaPencilRuler, FaDatabase, FaServer } from "react-icons/fa";

const SkillsSection = () => {
	return (
		<Element name="skills">
			<Container h="100%" maxW="container.xl" p={0} pt={5}>
				<SectionTitle>Skills</SectionTitle>

				<Flex
					justifyContent={"space-around"}
					flexDir={{ base: "column", lg: "row" }}
				>
					<SkillCard title="Frontend" icon={<FaPencilRuler />}>
						Although not my area of specialty, I can use HTML, CSS,
						and JavaScript to create modern and fluid user
						interfaces on the web. I strive to make the experience
						quick, convenient, and modern.
					</SkillCard>
					<SkillCard title="Web API's" icon={<FaServer />}>
						I have experience with PHP, Node JS, and Flask building
						web applications and web APIs. I endeavor to make my API
						applications secure and fast so that the user experience
						is safe and fast.
					</SkillCard>
					<SkillCard title="Backend" icon={<FaDatabase />}>
						The other pillar of any application is the backend
						deployment. Whether it is Docker or Kubernetes, I have
						experience deploying software using these techniques. I
						can also deploy other apps.
					</SkillCard>
				</Flex>
			</Container>
		</Element>
	);
};

export default SkillsSection;
