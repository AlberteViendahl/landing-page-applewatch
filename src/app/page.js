import Body from "@/components/Body";
import Button from "@/components/Button";
import Nav from "@/components/Nav";
import Watch from "@/components/Watch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-custom-gray w-1240 h-800 rounded-15">
      <Nav />
      <Body />
      <Button />
      <Watch />
    </div>
  );
}
