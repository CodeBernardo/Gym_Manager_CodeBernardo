import  React, { ReactNode } from "react";
import  { AppFooter } from "../footer";
import  { AppHeader } from "../header";

type DefaultTemplateProps = {
  children: ReactNode;
};

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};

export { DefaultTemplate };
