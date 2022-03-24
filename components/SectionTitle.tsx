import { Heading, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<Heading
			textDecor="underline"
			//@ts-ignore
			textUnderlineOffset={6}
			pl={useBreakpointValue({ base: 5, md: 20 })}
		>
			{children}
		</Heading>
	);
};

export default SectionTitle;
