import Hero from "../components/Hero";
import QuickStats from "../components/QuickStats";
import AboutPreview from "../components/AboutPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import Facilities from "../components/Facilities";
import PrincipalMessage from "../components/PrincipalMessage";
import LatestNotices from "../components/LatestNotices";
import AdmissionsCTA from "../components/AdmissionsCTA";

export default function Home() {
  return (
    <>
      <Hero />

      <AboutPreview />

      <WhyChooseUs />

      <Facilities />

      <PrincipalMessage />

      <AdmissionsCTA />
    </>
  );
}