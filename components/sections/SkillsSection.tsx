import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Element } from "react-scroll";
import SectionTitle from "../SectionTitle";
import SkillCard from "../SkillCard";

import { MdOutlineDesignServices } from "react-icons/md";
import { FaPencilRuler, FaDatabase, FaTabletAlt } from "react-icons/fa";

const SkillsSection = () => {
	return (
		<Element name="skills">
			<Container h="100%" maxW="container.xl" p={0} pt={20}>
				<SectionTitle>Skills</SectionTitle>

				<Flex
					justifyContent={"space-between"}
					flexDir={{ base: "column", lg: "row" }}
				>
					<SkillCard title="Frontend" icon={<FaPencilRuler />}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						At placeat nesciunt possimus corporis doloribus aut
						voluptates ullam officiis! Nobis, consectetur!
					</SkillCard>
					<SkillCard
						title="Frontend"
						icon={<MdOutlineDesignServices />}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						At placeat nesciunt possimus corporis doloribus aut
						voluptates ullam officiis! Nobis, consectetur!
					</SkillCard>
					<SkillCard title="Backend" icon={<FaDatabase />}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						At placeat nesciunt possimus corporis doloribus aut
						voluptates ullam officiis! Nobis, consectetur!
					</SkillCard>
				</Flex>
			</Container>
		</Element>
	);
};

export default SkillsSection;
