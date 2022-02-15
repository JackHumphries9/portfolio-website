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
					h="80vh"
				>
					<Box
						w={{ base: "100%", md: "50%" }}
						alignItems={"center"}
						justifyItems={"center"}
						bg={useColorModeValue("#F2F2F2", "#272727")}
						borderRadius={"2xl"}
						p={10}
					>
						<Heading as="h2" fontWeight="medium">
							Jack Humphries, The Developer
						</Heading>
						<br />
						<Text fontSize={"md"}>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Doloremque, repellendus alias! Explicabo
							libero provident aperiam dolorem itaque quisquam,
							quo voluptatem quibusdam fugit quas ipsa fuga a
							velit eveniet sunt placeat vel eligendi reiciendis.
							Ipsum, repudiandae. Dolorem atque doloremque iure,
							expedita esse commodi id nemo quaerat tenetur
							maiores reprehenderit illo assumenda possimus rerum
							qui voluptate deserunt.
						</Text>
						<br />
						<Button bg={"#C5A47E"}>
							View Works <ChevronRightIcon />
						</Button>
					</Box>
					<Box
						w="50%"
						flex={1}
						h="100%"
						spacing="6"
						align="flex-start"
					>
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
