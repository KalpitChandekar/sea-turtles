import Image from "next/image";
import Button from "./Button";

const Explore = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Image
        src="/line3.png"
        alt="line"
        height={136}
        width={1316}
        className="my-32"
      />
      <div className="md:w-[40%]">
        <h2 className="my-3 text-6xl font-semibold">Explore more ocean life</h2>
        <p className=" ">
          Don't stop at sea turtles—there's a whole ocean full of amazing
          creatures waiting to be discovered! From the colorful coral reefs to
          the mysterious depths, each layer of the ocean has its own set of
          residents.
        </p>
        <div>
          <Button />
        </div>
      </div>

      <Image
        src="/line3.png"
        alt="line"
        height={136}
        width={1316}
        className="my-28"
      />
    </div>
  );
};
export default Explore;
