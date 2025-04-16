import { useState } from "react";
import MenuOpciones from "./Menu";

export default function ToggleMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Alterna el estado entre abierto y cerrado
  };

  return (
    <div>
      <button
        onClick={() => {
          console.log("Holaaa");
          toggleMenu();
        }}
        className="text-green-900 text-3xl md:hidden p-4"
      >
        ☰
      </button>
      <MenuOpciones
        isVisible={isMenuOpen}
        updateState={() => {
          toggleMenu();
        }}
      />
    </div>
  );
}
