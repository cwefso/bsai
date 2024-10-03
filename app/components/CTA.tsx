const CTA = () => {
  return (
    <section className="overflow-hidden w-screen sm:grid sm:grid-cols-2 px-12">
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

      <img
        alt=""
        src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full object-cover sm:h-full rounded-lg"
      />
    </section>
  );
};

export default CTA;
