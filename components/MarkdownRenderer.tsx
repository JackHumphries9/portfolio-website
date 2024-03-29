/**
 * This code has been copied from `chakra-ui-markdown-renderer` and partially modified to work properly with my site.
 * I want to give all credit to the original author mustaphaturhan (https://www.npmjs.com/package/chakra-ui-markdown-renderer)
 * I just changed the way code renders
 */

import * as React from "react";
import deepmerge from "deepmerge";
import { Components } from "react-markdown";
import { useColorModeValue } from "@chakra-ui/react";
import {
	Code,
	Divider,
	Heading,
	Link,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
} from "@chakra-ui/layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as code_style } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { Image } from "@chakra-ui/image";
import { Checkbox } from "@chakra-ui/checkbox";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { chakra } from "@chakra-ui/system";

type GetCoreProps = {
	children?: React.ReactNode;
	"data-sourcepos"?: any;
};

function getCoreProps(props: GetCoreProps): any {
	return props["data-sourcepos"]
		? { "data-sourcepos": props["data-sourcepos"] }
		: {};
}

interface Defaults extends Components {
	heading?: Components["h1"];
}

export const defaults: Defaults = {
	p: (props) => {
		const { children } = props;
		return <Text mb={2}>{children}</Text>;
	},
	em: (props) => {
		const { children } = props;
		return <Text as="em">{children}</Text>;
	},
	blockquote: (props) => {
		const { children } = props;
		return (
			<Code as="blockquote" p={2}>
				{children}
			</Code>
		);
	},
	code: (props) => {
		const { inline, children, className } = props;

		if (inline) {
			return <Code>{children}</Code>;
		}

		const match = /language-(\w+)/.exec(className || "");

		return (
			<SyntaxHighlighter
				className={className}
				style={code_style}
				whitespace="break-spaces"
				d="block"
				w="full"
				language={match![1]}
			>
				{String(children).replace(/\n$/, "")}
			</SyntaxHighlighter>
		);
	},
	del: (props) => {
		const { children } = props;
		return <Text as="del">{children}</Text>;
	},
	hr: (props) => {
		return <Divider />;
	},
	img: Image,
	text: (props) => {
		const { children } = props;
		return <Text as="span">{children}</Text>;
	},
	ul: (props) => {
		const { ordered, children, depth } = props;
		const attrs = getCoreProps(props);
		let Element = UnorderedList;
		let styleType = "disc";
		if (ordered) {
			Element = OrderedList;
			styleType = "decimal";
		}
		if (depth === 1) styleType = "circle";
		return (
			<Element
				spacing={2}
				as={ordered ? "ol" : "ul"}
				styleType={styleType}
				pl={4}
				pb={2}
				{...attrs}
			>
				{children}
			</Element>
		);
	},
	ol: (props) => {
		const { ordered, children, depth } = props;
		const attrs = getCoreProps(props);
		let Element = UnorderedList;
		let styleType = "disc";
		if (ordered) {
			Element = OrderedList;
			styleType = "decimal";
		}
		if (depth === 1) styleType = "circle";
		return (
			<Element
				spacing={2}
				as={ordered ? "ol" : "ul"}
				styleType={styleType}
				pl={4}
				pb={2}
				{...attrs}
			>
				{children}
			</Element>
		);
	},
	li: (props) => {
		const { children, checked } = props;
		let checkbox = null;
		if (checked !== null && checked !== undefined) {
			checkbox = (
				<Checkbox isChecked={checked} isReadOnly>
					{children}
				</Checkbox>
			);
		}
		return (
			<ListItem
				{...getCoreProps(props)}
				listStyleType={checked !== null ? "none" : "inherit"}
			>
				{checkbox || children}
			</ListItem>
		);
	},
	heading: (props) => {
		const { level, children } = props;
		const sizes = ["2xl", "xl", "lg", "md", "sm", "xs"];
		return (
			<Heading
				my={4}
				as={`h${level}`}
				size={sizes[level - 1]}
				{...getCoreProps(props)}
			>
				{children}
			</Heading>
		);
	},
	pre: (props) => {
		const { children } = props;
		return <chakra.pre {...getCoreProps(props)}>{children}</chakra.pre>;
	},
	table: Table,
	thead: Thead,
	tbody: Tbody,
	tr: (props) => <Tr>{props.children}</Tr>,
	td: (props) => <Td>{props.children}</Td>,
	th: (props) => <Th>{props.children}</Th>,
	a: (props) => (
		<Link href={props.href} textDecor="underline">
			{props.children}
		</Link>
	),
};

function ChakraUIRenderer(theme?: Defaults, merge = true): Components {
	const elements = {
		p: defaults.p,
		em: defaults.em,
		blockquote: defaults.blockquote,
		code: defaults.code,
		del: defaults.del,
		hr: defaults.hr,
		a: defaults.a,
		img: defaults.img,
		text: defaults.text,
		ul: defaults.ul,
		ol: defaults.ol,
		li: defaults.li,
		h1: defaults.heading,
		h2: defaults.heading,
		h3: defaults.heading,
		h4: defaults.heading,
		h5: defaults.heading,
		h6: defaults.heading,
		pre: defaults.pre,
		table: defaults.table,
		thead: defaults.thead,
		tbody: defaults.tbody,
		tr: defaults.tr,
		td: defaults.td,
		th: defaults.th,
	};

	if (theme && merge) {
		return deepmerge(elements, theme);
	}

	return elements;
}

export default ChakraUIRenderer;
