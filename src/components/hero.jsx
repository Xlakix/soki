import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowUp } from "lucide-react";
const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Trajanje animacije u milisekundama
      easing: "ease-in-out", // Tip animacije
      once: true, // Da li se animacija ponovo pokreće kad sekcija izađe iz view porta
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Izrada i Remont Kašika - Kruševac | Srbija</title>
        <meta
          name="description"
          content="Specijalizovani za izradu i remont kašika za građevinske mašine. Kvalitet, brzina i povoljne cene. Preko 10.000 uspešnih saradnji. Kruševac, Srbija."
        />
        <meta
          name="keywords"
          content="izrada kašika, remont kašika, kašike za bager, Kruševac, Srbija, građevinske mašine"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Izrada i Remont Kašika - Kruševac" />
        <meta
          property="og:description"
          content="Kvalitetna izrada i remont kašika za sve vrste građevinskih mašina. Dugogodišnje iskustvo."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sr_RS" />
      </Helmet>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dqwearmlt/image/upload/v1747083119/kasika_f49ult.jpg)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* NAVBAR */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="w-full px-6 xl:px-50 py-4 bg-black/80 flex items-center justify-between relative">
            {/* Logo */}
            <img
              src="https://res.cloudinary.com/dqwearmlt/image/upload/v1747135933/logoTransp_plnhbv.png"
              alt="Logo"
              className="w-32 xl:w-40"
            />

            {/* Desktop meni */}
            <div className="hidden xl:flex space-x-6 text-white font-medium">
              {["O nama", "Kašike i remont", "Info", "Lokacija"].map(
                (item, i) => (
                  <a
                    key={i}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-yellow-500 xl:text-xl transition duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            {/* Hamburger dugme */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden text-white z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobilni meni */}
            {menuOpen && (
              <div className="absolute top-full text-right left-0 w-full bg-black/90 backdrop-blur-md border border-yellow-500 rounded-b-xl py-4 px-6 shadow-xl z-40 transition">
                {["O nama", "Kašike i remont", "Info", "Lokacija"].map(
                  (item, i) => (
                    <a
                      key={i}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setMenuOpen(false)}
                      className="block text-white hover:text-yellow-400 font-semibold text-base py-2"
                    >
                      {item.toUpperCase()}
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Hero sadržaj */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
          data-aos="fade-up"
        >
          <h1 className="text-4xl xl:text-6xl font-bold mb-4 drop-shadow-lg">
            Izrada i Remont Kašika
          </h1>
          <p className="text-lg xl:text-2xl max-w-2xl drop-shadow-md">
            Profesionalna usluga za sve vrste građevinskih mašina. Kvalitet,
            izdržljivost i pouzdanost.
          </p>
          <a href="#o-nama">
            {" "}
            <button className="mt-8 cursor-pointer px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-2xl shadow-lg transition duration-300">
              Saznaj Više
            </button>
          </a>
        </div>
      </div>

      <div
        className="py-20 px-6 bg-gray-50"
        data-aos="fade-up"
        data-aos-delay="200"
        id="o-nama"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-stretch">
          {/* Leva strana */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 flex-1 flex flex-col justify-between">
            <div>
              <h2
                id="o-nama"
                className="text-4xl font-extrabold text-gray-900 mb-6"
              >
                O nama
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Naša firma, osnovana 2009. godine u Kruševcu, već dugi niz
                godina važi za lidera u industriji izrade i remonta kašika za
                građevinske mašine. Kroz 16 godina poslovanja, stekli smo
                poverenje klijenata širom zemlje, sa više desetina hiljada
                uspešnih saradnji.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Poznati smo po brzini izrade, vrhunskom kvalitetu naših usluga i
                najpovoljnijim cenama na tržištu, što nas čini idealnim
                partnerom za vaše projekte.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Uz pomoć naših iskusnih radnika, garantiramo brzu i kvalitetnu
                uslugu.
              </p>
            </div>
            <p className="text-xl font-semibold text-yellow-600">
              Poverite svoje projekte nama — nećete pogrešiti.
            </p>
          </div>

          {/* Desna strana */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 flex-1 flex flex-col justify-between">
            <div>
              <h2
                id="naše-usluge"
                className="text-4xl font-extrabold text-gray-900 mb-6"
              >
                Naše Usluge
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Specijalizovani smo za{" "}
                <span className="font-semibold text-yellow-600">
                  izradu i remont kašika
                </span>{" "}
                kao i{" "}
                <span className="font-semibold text-yellow-600">
                  razbušivanje sa izradom čaura
                </span>{" "}
                za sve vrste građevinskih mašina.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Takođe nudimo{" "}
                <span className="font-semibold text-yellow-600">
                  prodaju rezervnih delova
                </span>
                , uključujući{" "}
                <span className="font-semibold text-yellow-600">zube</span> i{" "}
                <span className="font-semibold text-yellow-600">
                  gumene gusenice za mini bagere
                </span>
                .
              </p>
            </div>

            {/* Video */}
            <div className="mt-6 relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg bg-black/80">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/CGJIFOcMRok"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-16 px-6 bg-gray-50"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2
            id="kašike-i-remont"
            className="text-4xl font-extrabold text-gray-900 mb-8"
          >
            Kašike i remont
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kartica 1 - 2 slike */}
            {/* Kartica 1 - 2 slike */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1.5">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Izrada velike kašike
              </h3>
              <div className="flex flex-col gap-4">
                <img
                  src="https://res.cloudinary.com/dqwearmlt/image/upload/v1747082690/fkca7hrdk02juglktq6u.jpg"
                  onClick={() =>
                    openLightbox(
                      "https://res.cloudinary.com/dqwearmlt/image/upload/v1747082690/fkca7hrdk02juglktq6u.jpg"
                    )
                  } // Otvoriti prvu sliku
                  alt="Kašika 1"
                  className="rounded-lg object-cover h-40 w-full"
                />
                <img
                  src="https://res.cloudinary.com/dqwearmlt/image/upload/v1747083103/velikaKasika2_jcklc1.jpg"
                  onClick={() =>
                    openLightbox(
                      "https://res.cloudinary.com/dqwearmlt/image/upload/v1747083103/velikaKasika2_jcklc1.jpg"
                    )
                  } // Otvoriti drugu sliku
                  alt="Kašika 2"
                  className="rounded-lg object-cover h-40 w-full"
                />
              </div>
            </div>

            {/* Kartica 2 - 2 slike */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1.5">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Izrada kašike za beton
              </h3>
              <div className="flex flex-col gap-4">
                <img
                  src="https://i.postimg.cc/zXhDkLBf/kasika-Za-Beton.jpg"
                  onClick={() =>
                    openLightbox(
                      "https://i.postimg.cc/zXhDkLBf/kasika-Za-Beton.jpg"
                    )
                  } // Otvoriti prvu sliku
                  alt="Mašina 1"
                  className="rounded-lg object-cover h-40 w-full"
                />
                <img
                  src="https://i.postimg.cc/G3GhF89m/kasika-Za-Beton2.jpg"
                  onClick={() =>
                    openLightbox(
                      "https://i.postimg.cc/G3GhF89m/kasika-Za-Beton2.jpg"
                    )
                  } // Otvoriti drugu sliku
                  alt="Mašina 2"
                  className="rounded-lg object-cover h-40 w-full"
                />
              </div>
            </div>

            {/* Kartica 3 - 1 slika */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1.5">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Zubi za kašike
              </h3>
              <img
                src="https://res.cloudinary.com/dqwearmlt/image/upload/v1747083119/jez_t2d35m.jpg"
                onClick={() =>
                  openLightbox(
                    "https://res.cloudinary.com/dqwearmlt/image/upload/v1747083119/jez_t2d35m.jpg"
                  )
                } // Otvoriti ovu sliku
                alt="Zubi"
                className="rounded-lg object-cover h-40 w-full"
              />
            </div>

            {/* Kartica 4 - 1 slika */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1.5">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Izrada male kašike
              </h3>
              <img
                src="https://res.cloudinary.com/dqwearmlt/image/upload/v1747083296/malaKasika_vr6whb.jpg"
                onClick={() =>
                  openLightbox(
                    "https://res.cloudinary.com/dqwearmlt/image/upload/v1747083296/malaKasika_vr6whb.jpg"
                  )
                } // Otvoriti ovu sliku
                alt="Gusenice"
                className="rounded-lg object-cover h-40 w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-20 px-6 bg-gray-100"
        data-aos="fade-up"
        data-aos-delay="200"
        id="info"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
            Kontakt Info
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            {/* Firma */}
            <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border-t-4 border-yellow-500">
              <div className="text-3xl mb-2">🏢</div>
              <p className="font-semibold text-gray-700">Metal Centar</p>
              <span className="text-sm text-gray-500">Firma</span>
            </li>

            {/* Adresa */}
            <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border-t-4 border-yellow-500">
              <div className="text-3xl mb-2">📍</div>
              <p className="font-semibold text-gray-700">
                Cara Lazara 470, Čitluk
              </p>
              <span className="text-sm text-gray-500">Adresa</span>
            </li>

            {/* Telefon */}
            <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border-t-4 border-yellow-500">
              <div className="text-3xl mb-2">☎️</div>
              <p className="font-semibold text-gray-700">037/692-443</p>
              <span className="text-sm text-gray-500">Telefon</span>
            </li>

            {/* Mobilni */}
            <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border-t-4 border-yellow-500">
              <div className="text-3xl mb-2">📱</div>
              <p className="font-semibold text-gray-700">+381 64 223 5410</p>
              <span className="text-sm text-gray-500">Mobilni</span>
            </li>

            {/* Email */}
            <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border-t-4 border-yellow-500 col-span-1 sm:col-span-2">
              <div className="text-3xl mb-2">✉️</div>
              <a
                href="mailto:metalcentarcitluk@gmail.com"
                className="font-semibold text-blue-600 hover:underline"
              >
                metalcentarcitluk@gmail.com
              </a>
              <div className="text-sm text-gray-500">Email</div>
            </li>

            {/* PIB */}
            <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border-t-4 border-yellow-500">
              <div className="text-3xl mb-2">🧾</div>
              <p className="font-semibold text-gray-700">106360304</p>
              <span className="text-sm text-gray-500">PIB</span>
            </li>

            {/* Matični broj */}
            <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border-t-4 border-yellow-500">
              <div className="text-3xl mb-2">🔢</div>
              <p className="font-semibold text-gray-700">61483845</p>
              <span className="text-sm text-gray-500">Matični broj</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="py-20 px-6 bg-gray-50"
        data-aos="fade-up"
        data-aos-delay="200"
        id="lokacija"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
            Naša Lokacija
          </h2>
          {/* Google Map Embed */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-10">
            <MapContainer
              center={[43.5875261, 21.2767097]} // Koordinate za Kruševac, možeš promeniti prema potrebama
              zoom={13}
              scrollWheelZoom={false}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[43.5875261, 21.2767097]}>
                <Popup>Cara Lazara 472</Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Adresa */}
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 cursor-pointer right-6 p-3 rounded-full bg-yellow-600 text-white shadow-lg hover:bg-yellow-700 transition duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <img
            src={lightboxImage}
            alt="Uvećana slika"
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default Hero;
