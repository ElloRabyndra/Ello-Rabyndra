import Navbar from "@/components/Navbar";
import HeaderHome from "@/components/home/HeaderHome";
import Socmed from "@/components/home/Socmed";
import About from "@/components/home/About";
import TechHeader from "@/components/home/TechHeader";
import TechContent from "@/components/home/TechContent";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <section id="home">
      <div className="container mx-auto">
        <Navbar />
        <main className="p-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center pt-24 lg:pt-10 min-h-screen">
          <div className="w-full xl:px-20">
            <HeaderHome />
            <Socmed />
          </div>
          <div className="w-full">
            <About />
          </div>
        </main>
        <div className="p-4 mb-10 lg:mb-20 max-w-7xl mx-auto">
          <TechHeader />
          <TechContent />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
