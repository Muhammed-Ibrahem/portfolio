import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Stack from "./Components/Stack";
import { createPortal } from "react-dom";
import ThemeToggle from "./UI/ThemeToggle";
import { useEffect, useState } from "react";

const Mode = localStorage.getItem("SuKaar-Portfolio-Theme") === "DARK";

function App() {
  const [darkMode, setDarkMode] = useState(Mode);
  const setTheme = () => {
    setDarkMode((isPrevModeDark) => {
      document.documentElement.className = isPrevModeDark ? "" : "dark";
      isPrevModeDark
        ? localStorage.setItem("SuKaar-Portfolio-Theme", "LIGHT")
        : localStorage.setItem("SuKaar-Portfolio-Theme", "DARK");
      return !isPrevModeDark;
    });
  };
  useEffect(() => {
    document.documentElement.className = darkMode ? "dark" : "";
  }, []);
  return (
    <>
      {createPortal(
        <ThemeToggle isModeDark={darkMode} toggleTheme={setTheme} />,
        document.getElementById("ToggleTheme")
      )}
      <Header isModeDark={darkMode} />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
