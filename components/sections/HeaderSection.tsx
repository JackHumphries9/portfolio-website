import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const HeaderSection = ({ title }: { title: string }) => {
	return (
		<>
			<Box
				overflowX="hidden"
				height="60vh"
				display={"flex"}
				alignItems="center"
				justifyItems={"center"}
			>
				<Box flex={1}>
					<motion.div
						animate={{
							opacity: [0, 1],
							translateY: ["-5px", "0px"],
						}}
						transition={{
							duration: 1,
							ease: "easeOut",
						}}
					>
						<Heading
							overflowY="hidden"
							wordBreak={"keep-all"}
							as="h1"
							fontSize={{ base: "10w", md: "8vw" }}
							textAlign="center"
							fontWeight="200"
						>
							{title}
						</Heading>
					</motion.div>
				</Box>
			</Box>
		</>
	);
};

export default HeaderSection;
