import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Fact1 from "@/components/Fact1";
import Fact2 from "@/components/Fact2";
import Footer from "@/components/Footer";
import Fact3 from "@/components/Fact3";
import Explore from "@/components/Explore";

const page = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <section id="fact1">
        <Fact1 />
      </section>
      <Fact2 />
      <Fact3 />
      <section id="explore">
        <Explore />
      </section>
      <Footer />
    </main>
  );
};
export default page;
