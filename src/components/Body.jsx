"use client"; // Sørger for, at komponenten renderes på klienten
import Image from "next/image"; // Importerer Next.js' Image-komponent, som er optimeret til at håndtere billeder
import { useState } from "react";
import Dots from "./Dots";
import Watch from "@/components/Watch";
import Button from "./Button";

const Body = () => {
  // Opretter en state, der holder styr på den valgte urfarve
  const [watchColor, setWatchColor] = useState("grey");

  return (
    <div className="grid grid-cols-2 pt-20 pl-10">
      <div className="col-span-1">
        <h1 className="text-60px font-bold text-white ">The Perfect Moment</h1>
        <h2 className="text-60px text-white">Between Past And Future</h2>
      </div>
      <div className="flex">
        <Image
          className="col-span-1 h-96 w-96"
          src={`/img/${watchColor}.png`} // Dynamisk sti baseret på valgt farve
          alt={`${watchColor} watch`}
          width={386}
          height={386}
        />
        {/* Giver Dots-komponenten adgang til setWatchColor */}
        <Dots setWatchColor={setWatchColor} />
        {/* Sender setWatchColor som en prop til Dots */}
      </div>
      <Button className="w-10" />
      <Watch setWatchColor={setWatchColor} />
    </div>
  );
};

export default Body;
