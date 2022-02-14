import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Element } from "react-scroll";

const BioSection = () => {
	return (
		<Element name="bio">
			<Container h="100vh" maxW="90vw" p={0} pt={20}>
				<Heading textDecor="underline" textUnderlineOffset={6}>
					Bio
				</Heading>
				<Flex
					my={20}
					direction={{ base: "column", md: "row" }}
					flex={1}
					h="80vh"
				>
					<Flex flex={1}>
						<Box
							w="25vw"
							alignItems={"center"}
							justifyItems={"center"}
							bg="#272727"
							borderRadius={"2xl"}
							p={10}
						>
							<Heading as="h2" fontWeight="medium">
								Jack Humphries, The Developer
							</Heading>
							<br />
							<Text fontSize={"md"}>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Doloremque, repellendus alias!
								Explicabo libero provident aperiam dolorem
								itaque quisquam, quo voluptatem quibusdam fugit
								quas ipsa fuga a velit eveniet sunt placeat vel
								eligendi reiciendis. Ipsum, repudiandae. Dolorem
								atque doloremque iure, expedita esse commodi id
								nemo quaerat tenetur maiores reprehenderit illo
								assumenda possimus rerum qui voluptate deserunt.
							</Text>
						</Box>
					</Flex>
					<Box
						flex={1}
						w="full"
						h="full"
						p={10}
						spacing={6}
						align="flex-start"
					>
						Hello World!
					</Box>{" "}
				</Flex>
			</Container>
		</Element>
	);
};

export default BioSection;
