import React, { useRef, useState } from "react";
import Card from "./Card";
import { FaLeaf } from "react-icons/fa";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "This is data that is comming background color.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is data that is comming background color.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: " Now", tagColor: "blue" },
    },
    {
      desc: "This is data that is comming background color.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
