import { ReactNode } from "react";
import { Element } from "react-scroll";

interface Props {
  name: string;
  child: ReactNode;
}

const Section = ({ name, child }: Props) => {
  return (
    <Element
      name={name}
      className="custom-content-section grid grid-cols-1 gap-4"
    >
      {child}
    </Element>
  );
};

export default Section;
