// src/components/ToggleMenuButton.jsx
import { useState } from "react";
import MenuOpciones from "./Menu";

export default function ToggleMenuButton() {
  // Estado para abrir o cerrar el menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función que alterna el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Alterna el estado entre abierto y cerrado
  };

  return (
    <div>
      {/* Botón de menú, solo visible en dispositivos móviles */}
      <button
        onClick={() => {
          console.log("Holaaa")
          toggleMenu();
        }}
        className="text-green-900 text-3xl md:hidden p-4" // Visible solo en móviles
      >
        ☰
      </button>
      <MenuOpciones isVisible={isMenuOpen} updateState={() => {
        toggleMenu();
      }} />
    </div>
  );
}
