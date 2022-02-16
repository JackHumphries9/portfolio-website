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
import { motion, useAnimation } from "framer-motion";
import React, { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SkillCard({
	title,
	icon,
	children,
}: {
	title: string;
	icon: ReactElement;
	children: React.ReactNode;
}) {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial={{ opacity: 0, translateY: "-10px" }}
			variants={{
				visible: {
					opacity: 1,
					translateY: "0px",
					transition: { duration: 1 },
				},
				hidden: { opacity: 0, translateY: "-10px" },
			}}
		>
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
		</motion.div>
	);
}
