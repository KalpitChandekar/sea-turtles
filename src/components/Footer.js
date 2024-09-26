import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto mt-32 mb-10">
      <div className="flex justify-between my-16">
        <div>
          <a href="/">
            <Image src="/logo.png" alt="logo" width={153} height={31} />
          </a>
          <p className="mt-8">
            Unraveling the mysteries of marine life, <br /> where we break down
            the incredible <br /> journeys of sea creatures.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          <li className="font-bold text-lg">
            <a href="/">Company</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="font-bold text-lg">
            <a href="/">Resources</a>
          </li>
          <li>
            <a href="/">Newsletter</a>
          </li>
          <li>
            <a href="/">E-book</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="font-bold text-lg">
            <a href="/">Legal</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div className="bg-blue-900 p-6 flex gap-2 items-center justify-center rounded-3xl">
        <Image
          src="/uxpeak.png"
          alt="uxpeak"
          height={23}
          width={27}
          className="w-4"
        />
        <p className="">Website created by uxpeak</p>
      </div>
    </div>
  );
};
export default Footer;
