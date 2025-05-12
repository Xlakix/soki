import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-5 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-3">Kontaktirajte Nas</h3>

        <ul className="space-y-4">
          <li className="flex items-center justify-center">
            <span className="mr-2 text-2xl">🏢</span>
            <span className="font-semibold">Metal Centar</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="mr-2 text-2xl">📍</span>
            <span className="text-gray-400">Cara Lazara 470, Čitluk</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="mr-2 text-2xl">☎️</span>
            <span className="text-gray-400">037/692-443</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="mr-2 text-2xl">📱</span>
            <span className="text-gray-400">+381 64 223 5410</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="mr-2 text-2xl">✉️</span>
            <a
              href="mailto:metalcentarcitluk@gmail.com"
              className="text-blue-400 hover:text-blue-600"
            >
              metalcentarcitluk@gmail.com
            </a>
          </li>
        </ul>

        <div className="mt-5">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Metal Centar. Sva prava zadržana.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
