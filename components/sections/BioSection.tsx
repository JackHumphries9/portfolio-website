import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Center,
	Container,
	Flex,
	Heading,
	Text,
	useBreakpointValue,
	useColorModeValue,
	Image,
} from "@chakra-ui/react";
import React from "react";
import { Element } from "react-scroll";
import ImageStack from "../ImageStack";
import SectionTitle from "../SectionTitle";

const BioSection = () => {
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
						<Text fontSize={"md"}>
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
						<Button bg={"#C5A47E"}>
							View Works <ChevronRightIcon />
						</Button>
					</Box>
					<Box
						flex={1}
						h="100%"
						spacing="6"
						px={5}
						align="flex-start"
					>
						<ImageStack />
						{/* <Box position={"relative"} h="20%">
							<Image
								src="/project.webp"
								rounded={"xl"}
								left="10%"
								top="5%"
								position="absolute"
							/>
						</Box>
						<Box position={"relative"} h="20%">
							<Image
								src="/project.webp"
								rounded={"xl"}
								position="absolute"
								left="50%"
								top="10%"
							/>
						</Box> */}
					</Box>
				</Flex>
			</Container>
		</Element>
	);
};

export default BioSection;
