export const Banner = () => {
  return (
    <section className=" w-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-80 ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Leveraging AI for
            <strong className="font-extrabold text-teal-600 sm:block">
              {" "}
              Better Solutions.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Our company stands at the forefront of artificial intelligence
            technology, utilizing machine learning algorithms and predictive
            analytics to optimize your business.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 hover:bg-gray-300 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
