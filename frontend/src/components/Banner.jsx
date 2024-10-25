import { Link } from "react-router-dom";
import banner from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center pt-24"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <div className="border border-white hover:bg-white hover:text-black rounded-3xl px-4 md:px-14 py-2 mb-4 mt-[2rem] md:mt-[6rem] transition duration-300">
          <span>School &lt;&gt;</span>
          <span>Teachers &lt;&gt;</span>
          <span>Parents</span>
        </div>

        <h1 className="sm:text-3xl text-4xl text-center md:text-7xl font-bold mb-[4rem] md:mb-[6rem]">
          Powering K12 with new- <br /> ages SAAS.
        </h1>

        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-4 mb-[4rem]">
          <Link
            to="/download"
            className="bg-white text-blue-500 border border-white hover:bg-transparent hover:text-white transition rounded-3xl px-6 py-3 whitespace-nowrap"
          >
            Download the App
          </Link>
          <Link
            to="/talk"
            className="border border-white text-white hover:bg-white hover:text-blue-500 transition rounded-3xl px-6 py-3 whitespace-nowrap"
          >
            Talk to an Expert
          </Link>
        </div>

        <div className="w-full max-w-3xl px-4 mb-[4rem] md:mb-[6rem]">
          <iframe
            width="100%"
            height="300"
            className="md:h-[350px]"
            src="https://www.youtube.com/embed/Q45zMjr-Lo0?si=_xTLihZs-5cairfP"
            title="Embedded video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Banner;
