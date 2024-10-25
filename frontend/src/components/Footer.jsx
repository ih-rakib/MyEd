import logo from "../assets/images/logo_white.png";

const Footer = () => {
  return (
    <footer className="bg-[#394fba] py-10 px-7 md:px-16 lg:px-36">
      <div className="flex flex-col gap-7 md:gap-0 md:flex-row justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-white font-semibold">Contact</h3>
            <span className="text-gray-300">
              Work inquiries: Myed.live@gmail.com
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-white font-semibold">Careers</h3>
            <span className="text-gray-300">Careers@myed.live</span>
            <p className="hidden md:block text-gray-400 mt-5">
              @2024 MyEd All Rights Reserved
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="text-lg text-white mb-2 font-semibold">Address</h3>
            <span className="text-gray-300">MyEd Pvt. Ltd.</span>
            <span className="text-gray-300">Tides Incubator</span>
            <span className="text-gray-300">IIT Roorkee</span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg text-white mb-2 font-semibold">Social</h3>
            <span className="text-gray-300">Twitter</span>
            <span className="text-gray-300">Instagram</span>
            <span className="text-gray-300">LinkedIn</span>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex-grow" />
          <img
            src={logo}
            alt="logo"
            className="h-10 w-1/2 md:w-max md:h-16 mb-2"
          />{" "}
          <p className="text-gray-400 mt-5 md:hidden">
            @2024 MyEd All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
