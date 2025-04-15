// src/components/ToggleMenuButton.jsx
import { useState } from "react";

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
        onClick={toggleMenu}
        className="text-green-900 text-3xl md:hidden" // Visible solo en móviles
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Menú deslizable */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white border-r border-green-900 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`} // Anima el menú deslizándose desde la izquierda
      >
        <nav className="flex flex-col space-y-4 p-6 text-green-900 text-sm font-semibold">
          <a href="#" className="px-4 py-2 rounded-full bg-amber-100/30">
            INICIO
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full hover:bg-amber-100 hover:text-green-950 transition-all"
          >
            SOBRE NOSOTROS
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full hover:bg-amber-100 hover:text-green-950 transition-all"
          >
            TOURS
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full hover:bg-amber-100 hover:text-green-950 transition-all"
          >
            CONTACTO
          </a>
        </nav>
      </div>
    </div>
  );
}
