import { Heading } from "@chakra-ui/react";
import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<Heading textDecor="underline" textUnderlineOffset={6} pl={20}>
			{children}
		</Heading>
	);
};

export default SectionTitle;
