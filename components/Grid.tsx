import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { MdDescription } from "react-icons/md";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({id,title,description,img,className,titleClassName}) => (
          <BentoGridItem id={id} key={id} title={title} description={description} className={className} img={img}/>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
