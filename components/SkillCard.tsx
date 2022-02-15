import {
	Heading,
	Avatar,
	Box,
	Center,
	Text,
	Stack,
	Button,
	Link,
	Badge,
	useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";

export default function SkillCard({
	title,
	icon,
	children,
}: {
	title: string;
	icon: ReactElement;
	children: React.ReactNode;
}) {
	return (
		<Center py={6}>
			<Box
				maxW={{ base: "100%", lg: "320px" }}
				w={"full"}
				bg={useColorModeValue("#F2F2F2", "#272727")}
				boxShadow={"xl"}
				rounded={"lg"}
				p={6}
				textAlign={"center"}
			>
				<Avatar
					size={"xl"}
					icon={icon}
					alt={"Icon"}
					mb={4}
					pos={"relative"}
				/>
				<Heading fontSize={"2xl"} fontFamily={"body"}>
					{title}
				</Heading>
				<Text
					textAlign={"center"}
					color={useColorModeValue("gray.700", "gray.400")}
					px={3}
				>
					{children}
				</Text>
			</Box>
		</Center>
	);
}
