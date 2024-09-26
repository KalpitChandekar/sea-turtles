import Image from "next/image";

const Fact1 = () => {
  return (
    <div className="flex mt-72 relative max-w-6xl mx-auto">
      <div className="flex justify-center w-1/2">
        <Image
          src="/line1.png"
          alt="facts"
          height={316}
          width={466}
          className="w-56 absolute -bottom-60"
        />
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-9xl font-semibold text-[#F2FFFC] ">O1</h1>

        <h2 className="my-3 text-6xl font-semibold">The first swim</h2>

        <p className="w-[80%]">
          When sea turtles hatch, their first big challenge is to get to the
          ocean from the beach. It's a race against time and predators. Once
          they hit the water, they start what's often called the 'lost years'
          because they drift far out to sea and aren't easy to track.
        </p>
      </div>
    </div>
  );
};
export default Fact1;
