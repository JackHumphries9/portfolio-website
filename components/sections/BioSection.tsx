import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Element } from "react-scroll";
import ImageStack from "../ImageStack";
import SectionTitle from "../SectionTitle";

const BioSection = () => {
	const router = useRouter();

	return (
		<Element name="bio">
			<Container maxW="container.xl" p={0} pt={20}>
				<SectionTitle>Bio</SectionTitle>
				<Flex
					my={20}
					direction={{ base: "column", md: "row" }}
					flex={1}
					h="100%"
				>
					<Box
						w={{ base: "100%", md: "50%" }}
						alignItems={"center"}
						justifyItems={"center"}
						bg={useColorModeValue("#F2F2F2", "#272727")}
						borderRadius={"2xl"}
						boxShadow={"2xl"}
						p={10}
					>
						<Heading as="h2" fontWeight="medium">
							Jack Humphries, The Developer
						</Heading>
						<br />
						<Text fontSize={"lg"}>
							Jack Humphries is a full-stack developer based in
							Manchester. He has a passion for building
							applications, services and any other digital
							creations. Since he was young, he has always had an
							interest in computing and electronics. From learning
							to code when he was only 12 years old, he certainly
							has experience and is always learning new
							technologies. Currently, he is studying Computer
							Science at Manchester Metropolitan University.
						</Text>
						<br />
						<Button
							bg={useColorModeValue("brand.200", "brand.400")}
							onClick={() => {
								router.push("/works");
							}}
							_focus={{
								ring: 2,
								ringColor: useColorModeValue(
									"brand.400",
									"brand.200"
								),
							}}
						>
							View Works <ChevronRightIcon />
						</Button>
					</Box>
					<Box flex={1} h="100%" px={5}>
						<ImageStack />
					</Box>
				</Flex>
			</Container>
		</Element>
	);
};

export default BioSection;
