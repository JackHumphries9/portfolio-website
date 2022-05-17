import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import HomeLayout from "../components/layouts/HomeLayout";
import MainLayout from "../components/layouts/MainLayout";
import BioSection from "../components/sections/BioSection";
import ContactSection from "../components/sections/ContactSection";
import CoverSection from "../components/sections/CoverSection";
import SkillsSection from "../components/sections/SkillsSection";

const Home: NextPage = () => {
	return (
		<HomeLayout title="Home">
			<CoverSection />
			<Container maxW="full">
				<BioSection />
				<SkillsSection />
				<ContactSection />
			</Container>
		</HomeLayout>
	);
};

export default Home;
