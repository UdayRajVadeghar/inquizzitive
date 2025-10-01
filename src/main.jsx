import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import "./index.css";

function Root() {
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <>
      <Navbar onReset={handleReset} />
      <App key={resetKey} />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
