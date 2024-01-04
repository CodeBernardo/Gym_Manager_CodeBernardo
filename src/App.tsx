import "./App.css";
import { DefaultTemplate } from "./components";
import { MainRoutes } from "./routes";

const App = () => {
  return (
    <>
      <DefaultTemplate>
        <main>
          <MainRoutes/>
        </main>
      </DefaultTemplate>
    </>
  );
};

export { App };
