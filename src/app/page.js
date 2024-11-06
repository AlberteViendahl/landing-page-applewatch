"use client";
import Body from "@/components/Body";
import Button from "@/components/Button";
import Nav from "@/components/Nav";
import Watch from "@/components/Watch";
import { useState } from "react";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import AccordionFaqs from "@/components/AccordionFaqs";

export default function Home() {
  return (
    <AccordionFaqs />
    /*     <div className="bg-custom-gray w-1240 h-800 rounded-15">
      <Nav />
      <Body />
    </div> */
  );
}
