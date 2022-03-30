import {
	Box,
	Button,
	Flex,
	FormControl,
	GridItem,
	Input,
	SimpleGrid,
	Text,
	Textarea,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useEmailJS from "../hooks/useEmailJS";
import FormInput from "./FormInput";

const MailForm = () => {
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
		<VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
			<SimpleGrid columns={2} columnGap={3} rowGap={4} w="full">
				<GridItem colSpan={2}>
					<FormInput
						onChange={(e) => {
							setName(e.target.value);
						}}
						placeholder={"Name"}
						type={"text"}
					/>
				</GridItem>
				<GridItem colSpan={2}>
					<FormInput
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						placeholder={"Email"}
						type={"email"}
					/>
				</GridItem>
				<GridItem colSpan={2}>
					<motion.div
						whileHover={{
							scale: 1.01,
						}}
					>
						<FormControl>
							<Textarea
								_focus={{
									ring: 2,
									ringColor: useColorModeValue(
										"brand.200",
										"brand.400"
									),
								}}
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
					<Text color={feedback.success ? undefined : "red"} pb={2}>
						{feedback.msg}
					</Text>
					<Flex justifyContent={"center"}>
						<Box flex={1} w="100%">
							<Button
								size="md"
								rounded="full"
								backgroundColor={useColorModeValue(
									"brand.200",
									"brand.400"
								)}
								_focus={{
									ring: 2,
									ringColor: useColorModeValue(
										"brand.400",
										"brand.200"
									),
								}}
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
	);
};

export default MailForm;
