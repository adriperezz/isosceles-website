import React, { useState } from 'react';

const menuItems = [
  { name: '¿Quiénes somos?', path: '/quienes-somos/' },
  { name: 'Rehabilitación y reformas', path: '/rehabilitacion-reformas/' },
  { name: 'Obra nueva', path: '/obra-nueva/' },
  { name: 'Servicios', path: '/servicios/' },
  { name: 'Trabaja con nosotros', path: '/trabaja-nosotros/' },
  { name: 'Contacto', path: '/contacto/' },
];

const MobileHeader = ({ currentPath }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Evitar la propagación del evento
    console.log('Button clicked'); // Para verificar si el botón fue clicado
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      <button
        className="baseline-menu-icon"
        onClick={toggleMenu} // Asegúrate de que no lleve paréntesis
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Mobile Full-Screen Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-blue-950 bg-opacity-95 flex flex-col items-center justify-center z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)} // Cerrar el menú al hacer clic en el fondo
        >
          <nav className="text-center space-y-8">
            <ul className="font-bold list-none gap-4">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className={`hover:text-blue-900 ${
                      currentPath === item.path
                        ? 'text-blue-900 border-b-2 border-blue-900'
                        : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={toggleMenu} // Asegúrate de que no lleve paréntesis
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
