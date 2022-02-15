import type { NextPage } from "next";

import MainLayout from "../../components/layouts/MainLayout";
import HeaderSection from "../../components/sections/HeaderSection";

const Home: NextPage = () => {
	return (
		<MainLayout title="Works">
			<HeaderSection title="Works" />
		</MainLayout>
	);
};

export default Home;
