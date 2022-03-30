import {
	Avatar,
	Box,
	Center,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SkillCard({
	title,
	icon,
	children,
	transitionDelay = 0,
}: {
	title: string;
	icon: ReactElement;
	children: React.ReactNode;
	transitionDelay?: number;
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
			initial={{
				opacity: 0,
				translateY: "-10px",
				startOffset: transitionDelay,
			}}
			variants={{
				visible: {
					opacity: 1,
					translateY: "0px",
					transition: { duration: 1 },
				},
			}}
		>
			{/* // TODO: Add motion on mouse move */}
			<Center py={6}>
				<Box
					maxW={{ base: "100%", lg: "320px" }}
					w={"full"}
					bg={useColorModeValue("#F2F2F2", "#272727")}
					boxShadow={"lg"}
					rounded={"lg"}
					p={6}
					textAlign={"center"}
				>
					<Avatar
						size={"xl"}
						icon={icon}
						mb={4}
						pos={"relative"}
						backgroundColor={useColorModeValue(
							"brand.200",
							"brand.400"
						)}
					/>
					<Heading fontSize={"2xl"} fontFamily={"body"}>
						{title}
					</Heading>
					<Text textAlign={"center"} px={3}>
						{children}
					</Text>
				</Box>
			</Center>
		</motion.div>
	);
}
