import Image from "next/image";
import DoubleDoubleTitle from "../Helpers/DoubleDoubleTitle/DoubleDoubleTitle";
import Socials from "../Helpers/Socials/Socials";

export default function Home() {
  return (
    <div>
      <DoubleDoubleTitle />
      <Socials />
      <h1>Home</h1>
      <Image
        src="/images/nextjs.png"
        alt="Next.js Logo"
        width={500}
        height={500}
      />
    </div>
  );
}
