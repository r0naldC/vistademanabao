import { ReactNode } from "react";

interface Props {
  child: ReactNode;
}

const Section = ({ child }: Props) => {
  return <div className="custom-content-section">{child}</div>;
};

export default Section;
