import { Box, Image } from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";

const ImageStack = () => {
	return (
		<Box
			display="grid"
			position="relative"
			gridTemplateColumns="repeat(12, 1fr)"
			py={5}
		>
			<Box gridColumn="1 / span 8" gridRow={1}>
				<span
					style={{
						boxShadow: "--var(--chakra-shadows-lg)",
					}}
				>
					<NextImage
						src="/images/img-back.jpeg"
						width={2533}
						height={4029}
					/>
				</span>
				{/* <Image boxShadow={"lg"} src="/images/img-back.jpeg" alt="" /> */}
			</Box>
			<Box gridRow={1} gridColumn="4 / -1" pt="20%" zIndex={1}>
				<span
					style={{
						boxShadow: "--var(--chakra-shadows-2xl)",
					}}
				>
					<NextImage
						src="/images/img-forward.jpg"
						width={1440}
						height={1440}
					/>
				</span>
				{/* <Image
					boxShadow={"2xl"}
					src="/images/img-forward.jpg"
					// src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/texture-waves-cropped.jpg"
					alt=""
				/> */}
			</Box>
		</Box>
	);
};

export default ImageStack;
