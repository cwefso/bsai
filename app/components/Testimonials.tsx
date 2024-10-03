import Testimonial from "./Testimonials/Testimonial";

const Testimonials = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight  sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <Testimonial
            rating={5}
            name={"Don Bupkiss"}
            content={
              "I've been using this AI product, and I'm thrilled! I'm not sure how it works, but I see changes. Plus, the regular billing is a reminder that something's happening."
            }
            image={"/images/person1.jpeg"}
          />
          <Testimonial
            rating={5}
            name={"Fiona Ono"}
            content={
              "This AI product is a mystery to me, but I'm happy! I can't point to specific results, but I'm sure it's working. I'm a smart person who wouldn't buy something useless just because it says it uses AI."
            }
            image={"/images/person2.jpeg"}
          />
          <Testimonial
            rating={5}
            name={"Guy Personman"}
            content={
              "I'm not exactly sure how this AI tool works, but I'm absolutely delighted with its performance. When I look at my app using DevTools, I can confirm it's doing something. It must be, right?"
            }
            image={"/images/person3.jpeg"}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
