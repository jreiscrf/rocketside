import { Routes } from "./src/routes/index";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Stores from "./src/stores";

export default function App() {
  return (
    <>
      <Provider store={Stores}>
        <Routes />
      </Provider>
    </>
  );
}
