import type { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import BioSection from "../components/sections/BioSection";
import ContactSection from "../components/sections/ContactSection";
import CoverSection from "../components/sections/CoverSection";
import SkillsSection from "../components/sections/SkillsSection";

const Home: NextPage = () => {
	return (
		<MainLayout title="Home">
			<CoverSection />
			<BioSection />
			<SkillsSection />
			<ContactSection />
		</MainLayout>
	);
};

export default Home;
