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
	HStack,
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
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
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
							textAlign={useBreakpointValue({
								base: "center",
								md: "left",
							})}
						>
							Want to work with me?
						</Heading>
						<br />
						<br />
						<br />

						<motion.div whileHover={{ scale: 1.1 }}>
							<Link href="mailto:me@jackhumphries.io">
								<Heading
									as="h2"
									fontWeight={300}
									fontSize={useBreakpointValue({
										base: "2xl",
										md: "4xl",
									})}
									_hover={{
										textUnderlineOffset: 4,
									}}
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
									<motion.div
										whileHover={{
											scale: 1.01,
										}}
									>
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
									</motion.div>
								</GridItem>
								<GridItem colSpan={2}>
									<motion.div
										whileHover={{
											scale: 1.01,
										}}
									>
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
									</motion.div>
								</GridItem>
								<GridItem colSpan={2}>
									<motion.div
										whileHover={{
											scale: 1.01,
										}}
									>
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
									</motion.div>
								</GridItem>

								<GridItem colSpan={2}>
									<Flex justifyContent={"center"}>
										<Box flex={1} w="100%">
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
				<Flex flex={1} spacing="6" pb={10}>
					<HStack flex={1} justifyContent="space-around">
						<Link href="https://instagram.com/jackphumphries">
							<FaInstagram
								size={useBreakpointValue({ base: 30, sm: 20 })}
								style={{ display: "inline", paddingTop: "7px" }}
							/>
							{useBreakpointValue({ base: "", sm: "Instagram" })}
						</Link>
						<Link href="https://twitter.com/jackphumphries">
							<FaTwitter
								size={useBreakpointValue({ base: 30, sm: 20 })}
								style={{
									display: "inline",
									paddingTop: "7px",
								}}
							/>{" "}
							{useBreakpointValue({ base: "", sm: "Twitter" })}
						</Link>
						<Link href="https://github.com/jackhumphries9">
							<FaGithub
								size={useBreakpointValue({ base: 30, sm: 20 })}
								style={{ display: "inline", paddingTop: "7px" }}
							/>{" "}
							{useBreakpointValue({ base: "", sm: "Github" })}
						</Link>
						<Link href="https://linkedin.com/in/jack-humphries/">
							<FaLinkedin
								size={useBreakpointValue({ base: 30, sm: 20 })}
								style={{ display: "inline", paddingTop: "7px" }}
							/>
							{useBreakpointValue({ base: "", sm: "LinkedIn" })}
						</Link>
					</HStack>
				</Flex>
			</Container>
		</Element>
	);
};

export default ContactSection;
