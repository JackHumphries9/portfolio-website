import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll";
import React from "react";

const CoverSection = () => {
	return (
		<>
			<Box
				overflowX="hidden"
				height="100vh"
				display={"flex"}
				alignItems="center"
				justifyItems={"center"}
			>
				<Box flex={1}>
					<motion.div
						animate={{ translateX: ["100%", "0%"] }}
						transition={{
							duration: 1,
							ease: "easeOut",
						}}
					>
						<Heading
							overflowY="hidden"
							wordBreak={"keep-all"}
							as="h1"
							fontSize={{ base: "12vw", md: "9vw" }}
							textAlign="right"
							fontWeight="200"
						>
							Jack Humphries
						</Heading>
					</motion.div>

					<motion.div
						animate={{ translateX: ["-100%", "0%"] }}
						transition={{
							duration: 1,
							ease: "easeOut",
						}}
					>
						<Heading
							wordBreak={"keep-all"}
							as="h1"
							fontSize={{ base: "12vw", md: "9vw" }}
							fontWeight="200"
						>
							Software Developer
						</Heading>
					</motion.div>
				</Box>
			</Box>
			<Box
				display={"block"}
				position={"absolute"}
				top="90vh"
				left="50%"
				textAlign="center"
				transform={"translate(-50%)"}
				cursor={"pointer"}
				onClick={() => {
					console.log("Scroll down");
				}}
			>
				<Scroll
					to="bio"
					smooth={true}
					href="#bio"
					style={{
						outlineColor: "#CCB08E",
					}}
				>
					<motion.div
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
					>
						<p>Scroll Down</p>
						<motion.div
							animate={{
								translateY: ["-10%", "10%", "-10%"],
							}}
							transition={{
								duration: 2,
								ease: "easeInOut",
								times: [0, 0.2, 0.5, 0.8, 1],
								repeat: Infinity,
								repeatDelay: 1,
							}}
						>
							<ChevronDownIcon />
						</motion.div>
					</motion.div>
				</Scroll>
			</Box>
		</>
	);
};

export default CoverSection;
