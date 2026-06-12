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

      <QuickStats />

      <AboutPreview />

      <WhyChooseUs />

      <Facilities />

      <PrincipalMessage />

      <LatestNotices />

      <AdmissionsCTA />
    </>
  );
}