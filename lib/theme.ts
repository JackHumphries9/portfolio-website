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

const colors = {
	brand: {
		"50": "#F7F3ED",
		"100": "#E9DCCE",
		"200": "#DBC6AE",
		"300": "#CCB08E",
		"400": "#BE996F",
		"500": "#B0834F",
		"600": "#8D693F",
		"700": "#6A4F2F",
		"800": "#463420",
		"900": "#231A10",
	},
};

const config = {
	initalColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
