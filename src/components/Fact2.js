import Image from "next/image";

const Fact2 = () => {
  return (
    <div className="flex flex-col md:flex-row md:mt-72 relative max-w-6xl mx-auto">
      <div className="md:w-1/2 mx-auto">
        <h1 className="text-9xl font-semibold text-[#F2FFFC]">O2</h1>

        <h2 className="my-3 text-6xl font-semibold">Where they <br /> hang out</h2>

        <p className="md:w-[80%]">
          As they get older, sea turtles find a place that's good for food and
          not too dangerous. These spots can be coral reefs, seagrass meadows,
          or open ocean. They stick around these areas, munching on their
          favorite foods and growing bigger.
        </p>
      </div>

      <div className="md:w-1/2 md:block flex justify-center my-10 md:my-0">
        <Image
          src="/line2.png"
          alt="line2"
          height={284}
          width={605}
          className="w-44 md:absolute right-80 -bottom-64"
        />
      </div>
    </div>
  );
};
export default Fact2;
