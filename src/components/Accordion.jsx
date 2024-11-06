"use client";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Accordion = () => {
  const [popUp, setPopUp] = useState(false);

  return (
    <article className="w-640  bg-slate-200 flex-center">
      <ol className="pb-2 ">
        <dd
          onClick={() => setPopUp(!popUp)} //der skal være item istedte for popup onClick={() => { PopUp === item ? setPopUp(0) : setPopUp(item) }}
          className="pb-5 pt-5 pl-2 bg-custom-gray text-black border-2 border-black rounded-15  flex gap-10 font-bold"
        >
          Hvorfor hedder det iWatch og ikke appleWatch?
          {popUp ? <RxCross1 /> : <MdOutlineKeyboardArrowDown />}
        </dd>
        {/* der skal være ===item  tjek fotos*/}
        {popUp && (
          <dl className="bg-white p-2 rounded-15 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            sequi eligendi magnam quo id reprehenderit odit quibusdam, in, unde
            eos odio? Illo voluptates error voluptas sequi repellat quia sit
            enim.
          </dl>
        )}
      </ol>
    </article>
  );
};

export default Accordion;
