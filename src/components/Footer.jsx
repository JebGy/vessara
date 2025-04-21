import logo from "../assets/logo.png";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-center">
      <div className="py-6">
        <img
          src={logo.src}
          alt="Logo de la empresa"
          class="w-40 md:w-40 sm:w-52 mx-auto md:mx-0 justify-self-center pb-4"
        />
        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700 nunito-script">
          <a href="#">INICIO</a>
          <a href="#">SOBRE NOSOTROS</a>
          <a href="#">CATEGORIAS</a>
          <a href="#">CONTACTO</a>
        </nav>
        <div className="flex justify-center gap-4 mt-4 text-gray-600 text-xl">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaTiktok />
          </a>
        </div>
      </div>
      <div className="bg-green-950 text-white text-sm py-2 nunito-script">
        TODOS LOS DERECHOS RESERVADOS - VESSARA 2025
      </div>
    </footer>
  );
}
