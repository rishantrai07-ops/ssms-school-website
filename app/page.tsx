import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import Facilities from "../components/Facilities";
import Stats from "../components/stats";
import WhyChooseUs from "../components/WhyChooseUs";
import PrincipalMessage from "../components/PrincipalMessage";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Stats />
      <Facilities />
      <WhyChooseUs />
      <PrincipalMessage />
    </>
  );
}