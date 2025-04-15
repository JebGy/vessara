import type { SetStateAction } from "react";

export default function MenuOpciones(props: { isVisible: boolean, updateState: () => void }) {
    console.log(props.isVisible)

    return props.isVisible ? <nav className="flex flex-col space-y-4 p-6 text-green-900 text-sm font-semibold absolute top-0 left-0 bg-white">
        <button
            onClick={() => {
                console.log("Holaaa")
                props.updateState();
            }}
            className="text-green-900 text-left text-md md:hidden p-4" // Visible solo en móviles
        >
            X
        </button>
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
    </nav> : null;
}