import React, { ReactNode } from "react";

type MainSectionProps = {
  children: ReactNode;
};

const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default MainSection;
