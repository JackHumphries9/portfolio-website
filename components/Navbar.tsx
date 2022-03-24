import { ReactNode } from "react";
import {
	Box,
	Flex,
	Link,
	Button,
	useColorModeValue,
	Stack,
	useColorMode,
	useBreakpointValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
	<Link
		p={2}
		textUnderlineOffset={6}
		fontSize="sm"
		_hover={{
			textDecoration: "underline",
		}}
		href={href}
		borderRadius="full"
		_focus={{
			ring: 2,
			ringColor: "#C5A47E",
		}}
	>
		{children}
	</Link>
);

export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Box
				px={{ base: 8, md: 12 }}
				py={{ base: 2, md: 4 }}
				position="fixed"
				as="nav"
				w="100%"
				zIndex={100}
			>
				<Flex
					h={16}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Box>
						<NextLink href="/" passHref>
							<Link
								fontWeight={600}
								borderRadius="full"
								textUnderlineOffset={4}
								ring={2}
								padding={2}
								_hover={{
									textDecoration: "underline",
								}}
								_focus={{
									ring: 2,
									ringColor: "#C5A47E",
								}}
								fontSize="sm"
							>
								{useBreakpointValue({
									base: "Jack",
									md: "Jack Humphries",
								})}
							</Link>
						</NextLink>
					</Box>

					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<NavLink href="/works">Works</NavLink>
							<NavLink href="/blog">Blog</NavLink>
							<Box
								fontSize="sm"
								p={2}
								onClick={toggleColorMode}
								_hover={{ cursor: "pointer" }}
							>
								{colorMode === "light" ? (
									<MoonIcon />
								) : (
									<SunIcon />
								)}
							</Box>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
