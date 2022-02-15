import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Checkbox,
	Container,
	Flex,
	FormControl,
	FormLabel,
	GridItem,
	Heading,
	Input,
	Link,
	Select,
	SimpleGrid,
	Text,
	Textarea,
	useBreakpointValue,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Element } from "react-scroll";
import SectionTitle from "../SectionTitle";

const ContactSection = () => {
	return (
		<Element name="contact">
			<Container maxW="container.xl" p={0} pt={20}>
				<SectionTitle>Contact</SectionTitle>
				<Flex
					my={20}
					direction={{ base: "column", md: "row" }}
					flex={1}
				>
					<Box flex={1} h="100%" spacing="6" align="flex-start">
						<Heading
							as="h1"
							fontWeight={300}
							fontSize={useBreakpointValue({
								base: "4xl",
								md: "6xl",
							})}
						>
							Want to work with me?
						</Heading>
						<br />
						<br />
						<br />

						<motion.div whileHover={{ scale: 1.1 }}>
							<Link
								href="mailto:me@jackhumphries.io"
								_hover={{ textDecoration: "none" }}
							>
								<Heading
									as="h2"
									fontWeight={300}
									fontSize={useBreakpointValue({
										base: "2xl",
										md: "4xl",
									})}
									textAlign="center"
									textDecor={"underline"}
									textUnderlineOffset={6}
								>
									me@jackhumphries.io
								</Heading>
							</Link>
						</motion.div>
					</Box>
					<Box flex={1} h="100%" spacing="6" align="flex-start">
						<VStack
							w="full"
							h="full"
							p={5}
							spacing={10}
							alignItems="flex-start"
						>
							<SimpleGrid
								columns={2}
								columnGap={3}
								rowGap={4}
								w="full"
							>
								<GridItem colSpan={2}>
									<FormControl>
										<Input
											type="text"
											placeholder="Name"
											rounded={"full"}
											backgroundColor={useColorModeValue(
												"#F2F2F2",
												"#272727"
											)}
										/>
									</FormControl>
								</GridItem>
								<GridItem colSpan={2}>
									<FormControl>
										<Input
											type="email"
											placeholder="Email"
											rounded={"full"}
											backgroundColor={useColorModeValue(
												"#F2F2F2",
												"#272727"
											)}
										/>
									</FormControl>
								</GridItem>
								<GridItem colSpan={2}>
									<FormControl>
										<Textarea
											placeholder="Type your message here..."
											rounded={"2xl"}
											backgroundColor={useColorModeValue(
												"#F2F2F2",
												"#272727"
											)}
										/>
									</FormControl>
								</GridItem>

								<GridItem colSpan={2}>
									<Flex justifyContent={"center"}>
										<Box flex={1}>
											<Button
												size="md"
												rounded="full"
												backgroundColor="#C5A47E"
											>
												Send
											</Button>
										</Box>
									</Flex>
								</GridItem>
							</SimpleGrid>
						</VStack>
					</Box>
				</Flex>
			</Container>
		</Element>
	);
};

export default ContactSection;
