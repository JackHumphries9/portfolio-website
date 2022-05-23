import {
	Box,
	Center,
	GridItem,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({
	title,
	children,
	imgUrl,
	date,
	slug,
	minsRead,
}: {
	title: string;
	children: React.ReactNode;
	imgUrl: string;
	date?: string;
	slug: string;
	minsRead?: string;
}) {
	return (
		<Link href={slug} passHref>
			<GridItem cursor={"pointer"}>
				<Center py={6}>
					<Box
						maxW="450px"
						w={"full"}
						bg={useColorModeValue("white", "#1e1e1e")}
						boxShadow={"2xl"}
						rounded={"md"}
						p={6}
						overflow={"hidden"}
					>
						<Box
							h={"210px"}
							bg={"gray.100"}
							mt={-6}
							mx={-6}
							mb={6}
							pos={"relative"}
						>
							<Image
								src={imgUrl}
								layout={"fill"}
								alt="Article Cover Photo"
							/>
						</Box>
						<Stack>
							<Heading
								color={useColorModeValue("gray.700", "white")}
								fontSize={"2xl"}
								fontFamily={"body"}
							>
								{title}
							</Heading>
							<Text>{children}</Text>
						</Stack>
						<Stack
							mt={6}
							direction={"row"}
							spacing={4}
							align={"center"}
						>
							{date && !minsRead ? (
								<Stack
									direction={"column"}
									spacing={0}
									fontSize={"sm"}
								>
									<Text>{new Date(date).toDateString()}</Text>
								</Stack>
							) : null}
							{minsRead && !date ? (
								<Stack
									direction={"column"}
									spacing={0}
									fontSize={"sm"}
								>
									<Text>{minsRead} min read</Text>
								</Stack>
							) : null}
							{date && minsRead ? (
								<Stack
									direction={"column"}
									spacing={0}
									fontSize={"sm"}
								>
									<Text>
										{new Date(date).toDateString()}
										&nbsp;·&nbsp; {minsRead} mins read
									</Text>
								</Stack>
							) : null}
						</Stack>
					</Box>
				</Center>
			</GridItem>
		</Link>
	);
}
