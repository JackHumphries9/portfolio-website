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

	Basically I think there is an issue with Font Awesome where it will not accept undefined values. When the page is first initialised,
	I think that `useBreakpointValue` kicks out undefined but then it does it's job. As it's undefined it first gets ignored by font awesome
	meaning the icon doesn't scale on small screens. So this code below makes sure the initial value is 30 and then its changed on desktop for
	when its initialised.
	
	It's still an issue so I'm at a loss but I'll file a bug report or something.

	EDIT: I've fixed this, I didn't know this but intellisense told me you can set a default breakpoint value in case it fails. I just set it to 
	base so that by default it renders for mobile then the update to the hook triggers this to update. I still wanna keep the above comment just 
	to show my learning process.

	*/

	const iconSize = useBreakpointValue({ base: 30, md: 20 }, "base")!;

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
