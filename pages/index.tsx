import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import MainLayout from "../components/layouts/MainLayout";
import BioSection from "../components/sections/BioSection";
import CoverSection from "../components/sections/CoverSection";

const Home: NextPage = () => {
	return (
		<MainLayout title="Home">
			<CoverSection />
			<BioSection />
		</MainLayout>
	);
};

export default Home;
