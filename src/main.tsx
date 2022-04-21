import * as ReactDOMClient from "react-dom/client";
import "./styles/index.css";
import App from "./App";
const contenedor = document.getElementById("root")!;
const root = ReactDOMClient.createRoot(contenedor);
root.render(<App />);