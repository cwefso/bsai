import Image from "next/image";
import Banner from "./components/Banner";
import CTA from "./components/CTA";
import FAQs from "./components/FAQs";
import IconCards from "./components/IconCards";
import ImageLeft from "./components/ImageLeft";
import ImageRight from "./components/ImageRight";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center">
      <Banner />
      <Testimonials />
      <CTA />
      <IconCards />
      <ImageLeft />
      <ImageRight />
    </main>
  );
}
