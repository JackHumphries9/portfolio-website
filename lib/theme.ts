import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
	global: (props: any) => ({
		body: {
			bg: mode("#ffffff", "#181818")(props),
		},
	}),
};

const components = {
	Heading: {},
};

const fonts = {
	heading: "Montserrat",
	body: "Montserrat",
};

const colours = {
	brand: "#C5A47E",
};

const config = {
	initalColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components, fonts, colours });
export default theme;
