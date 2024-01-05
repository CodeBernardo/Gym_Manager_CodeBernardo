import { DefaultTemplate } from "./components";
import { MainRoutes } from "./routes";
import React from "react";

const App = () => {
  return (
    <>
      <DefaultTemplate>
        <main>
          <MainRoutes />
        </main>
      </DefaultTemplate>
    </>
  );
};

export { App };
