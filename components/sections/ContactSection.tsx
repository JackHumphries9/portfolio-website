import {
	Box,
	Button,
	Container,
	Flex,
	FormControl,
	GridItem,
	Heading,
	HStack,
	Input,
	Link,
	SimpleGrid,
	Textarea,
	useBreakpointValue,
	useColorModeValue,
	VStack,
	Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Element } from "react-scroll";
import useEmailJS from "../../hooks/useEmailJS";
import SectionTitle from "../SectionTitle";

const ContactSection = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [feedback, setFeedback] = useState<{ msg: string; success: boolean }>(
		{ msg: "", success: false }
	);

	const send = useEmailJS();

	const submitMail = async () => {
		setIsLoading(true);
		setFeedback({ msg: "", success: false });
		// validation time!

		if (name.length <= 2 || email.length <= 6 || message.length <= 2) {
			setFeedback({
				msg: "There are fields which do not have enough characters in them.",
				success: false,
			});
			setIsLoading(false);
			return;
		} else {
			const emailRegex =
				/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

			if (!emailRegex.test(email)) {
				setFeedback({
					msg: "The email field is not valid.",
					success: false,
				});
				setIsLoading(false);
				return;
			} else {
				const success = await send(name, email, message);

				console.log(name, email, message);

				if (success) {
					setFeedback({
						msg: "Your email was send successfully!",
						success: true,
					});
					setIsLoading(false);

					return;
				} else {
					setFeedback({
						msg: "Unfortunately, an error occured.",
						success: false,
					});
					setIsLoading(false);

					return;
				}
			}
		}
	};

	return (
		<Element name="contact">
			<Container maxW="container.xl" p={0} pt={20}>
				<SectionTitle>Contact</SectionTitle>
				<Flex
					my={20}
					direction={{ base: "column", md: "row" }}
					flex={1}
				>
					<Box flex={1} h="100%">
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
							<Link
								_hover={{ textDecor: "none" }}
								href="mailto:me@jackhumphries.io"
							>
								<Heading
									as="h2"
									fontWeight={300}
									fontSize={useBreakpointValue({
										base: "2xl",
										md: "4xl",
									})}
									_hover={{
										textUnderlineOffset: 5,
									}}
									textAlign="center"
									textDecor={"underline"}
									// @ts-ignore
									textUnderlineOffset={6}
								>
									me@jackhumphries.io
								</Heading>
							</Link>
						</motion.div>
					</Box>
					<Box flex={1} h="100%">
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
												onChange={(e) => {
													setName(e.target.value);
												}}
												required
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
												onChange={(e) => {
													setEmail(e.target.value);
												}}
												required
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
												onChange={(e) => {
													setMessage(e.target.value);
												}}
												required
											/>
										</FormControl>
									</motion.div>
								</GridItem>

								<GridItem colSpan={2}>
									<Text
										color={
											feedback.success ? undefined : "red"
										}
										pb={2}
									>
										{feedback.msg}
									</Text>
									<Flex justifyContent={"center"}>
										<Box flex={1} w="100%">
											<Button
												size="md"
												rounded="full"
												backgroundColor="#C5A47E"
												isLoading={isLoading}
												onClick={() => {
													submitMail();
												}}
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
				<Flex flex={1} pb={10}>
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
