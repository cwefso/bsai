import Image from "next/image";

const CTA = () => {
  return (
    <section className="overflow-hidden w-screen sm:grid sm:grid-cols-2 px-64">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold  md:text-3xl">
            {" "}
            Harnessing AI for Unmatched Performance{" "}
          </h2>{" "}
          <p className="hidden  md:mt-4 md:block">
            {" "}
            Our AI solution, powered by advanced machine learning and predictive
            analytics, is designed to optimize your business operations,
            providing unmatched efficiency and productivity.{" "}
          </p>
          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-64 w-[70%] overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image alt="" src="/images/command.jpg" fill object-fit="cover" />
      </div>
    </section>
  );
};

export default CTA;
