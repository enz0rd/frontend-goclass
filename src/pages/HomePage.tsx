import Header from "@/components/homepage/Header";
import HomeFeatures from "@/components/homepage/HomeFeatures";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <HomeFeatures />
    </div>
  );
};

export default HomePage;
