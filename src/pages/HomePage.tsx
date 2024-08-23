import Footer from "@/components/Footer";
import Header from "@/components/homepage/Header";
import HomeFeatures from "@/components/homepage/HomeFeatures";
import PartnerGroup from "@/components/homepage/PartnerGroup";
import PlansCards from "@/components/homepage/PlansCards";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <HomeFeatures />
      <PlansCards />
      <PartnerGroup />
      <Footer />
    </div>
  );
};

export default HomePage;
