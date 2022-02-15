import { Box, Image } from "@chakra-ui/react";
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
				<Image
					boxShadow={"lg"}
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/portrait1.jpeg"
					alt=""
				/>
			</Box>
			<Box gridRow={1} gridColumn="4 / -1" pt="20%" zIndex={1}>
				<Image
					boxShadow={"2xl"}
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/texture-waves-cropped.jpg"
					alt=""
				/>
			</Box>
		</Box>
	);
};

export default ImageStack;
