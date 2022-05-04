import {
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	Link,
	useBreakpointValue,
	useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Element } from "react-scroll";
import MailForm from "../MailForm";
import SectionTitle from "../SectionTitle";

// TODO: I should probably abstract this into multiple components at some point

const ContactSection = () => {
	/*

	If your reading the below code and thinking "what the *beep*" then let me explain:

	Basically I think there is an issue with fontawesome where it will not accept undefined values. When the page is first initalised,
	I think that `useBreakpointValue` kicks out undefined but then it does it's job. As it's undefined it first gets ignored by font awesome
	meaning the icon doesn't scale on small screens. So this code below makes sure the inital value is 30 and then its changed on desktop for
	when its initalised.
	*/

	let iconSize = 30;
	if (useBreakpointValue({ base: 30, md: 20 })) {
		iconSize = useBreakpointValue({ base: 30, md: 20 })!;
	}

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
						<MailForm />
					</Box>
				</Flex>
				<Flex flex={1} pb={10}>
					<HStack flex={1} justifyContent="space-around">
						{/* I probably could have created each one as a component but I wasn't sure how to pass the props for each icon without doing some jank rubbish */}
						<Link
							href="https://instagram.com/jackphumphries"
							borderRadius={"xl"}
							_focus={{
								ring: 2,
								ringColor: useColorModeValue(
									"brand.200",
									"brand.400"
								),
							}}
						>
							<FaInstagram
								size={iconSize}
								style={{ display: "inline", paddingTop: "7px" }}
							/>
							{useBreakpointValue({ base: "", md: "Instagram" })}
						</Link>
						<Link
							href="https://twitter.com/jackphumphries"
							borderRadius={"xl"}
							_focus={{
								ring: 2,
								ringColor: useColorModeValue(
									"brand.200",
									"brand.400"
								),
							}}
						>
							<FaTwitter
								size={iconSize}
								style={{
									display: "inline",
									paddingTop: "7px",
								}}
							/>{" "}
							{useBreakpointValue({ base: "", md: "Twitter" })}
						</Link>
						<Link
							href="https://github.com/jackhumphries9"
							borderRadius={"xl"}
							_focus={{
								ring: 2,
								ringColor: useColorModeValue(
									"brand.200",
									"brand.400"
								),
							}}
						>
							<FaGithub
								size={iconSize}
								style={{ display: "inline", paddingTop: "7px" }}
							/>{" "}
							{useBreakpointValue({ base: "", md: "Github" })}
						</Link>
						<Link
							href="https://linkedin.com/in/jack-humphries/"
							borderRadius={"xl"}
							_focus={{
								ring: 2,
								ringColor: useColorModeValue(
									"brand.200",
									"brand.400"
								),
							}}
						>
							<FaLinkedin
								size={iconSize}
								style={{ display: "inline", paddingTop: "7px" }}
							/>
							{useBreakpointValue({ base: "", md: "LinkedIn" })}
						</Link>
					</HStack>
				</Flex>
			</Container>
		</Element>
	);
};

export default ContactSection;
