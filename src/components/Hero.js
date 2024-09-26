import Image from "next/image";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center justify-center my-20">
      <h3 className="uppercase font-semibold">fascinating the life of</h3>
      <h1 className="text-center uppercase mt-4 text-7xl md:text-9xl font-bold">sea turtles</h1>
      <p className="max-w-xl mx-auto text-center my-2 font-sans">
        Let's dive into the life of sea turtles, one of the ocean's most
        well-known but mysterious creatures. We'll break it down into three key
        stops-each one a crucial chapter in the sea turtle's journey.
      </p>
      <Button />
      <div className="absolute bottom-28 md:top-80 left-0">
        <Image
          src="/Starfish.png"
          alt="hero image"
          width={463}
          height={596}
          className="md:w-96 w-72"
        />
      </div>
    </div>
  );
};
export default Hero;
