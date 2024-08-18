import Footer from "@/components/Footer";
import Header from "@/components/homepage/Header";
import HomeFeatures from "@/components/homepage/HomeFeatures";
import PlansCards from "@/components/homepage/PlansCards";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <HomeFeatures />
      <PlansCards />
      <Footer />
    </div>
  );
};

export default HomePage;
