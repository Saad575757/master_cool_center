import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { DetailedServices } from "@/components/detailed-services";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { ServicesOverview } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <DetailedServices />
      <About />
      <Process />
      <Contact />
    </>
  );
}
