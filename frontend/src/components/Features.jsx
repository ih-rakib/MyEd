import feature1 from "../assets/images/feature1.png";
import feature2 from "../assets/images/feature2.png";
import feature3 from "../assets/images/feature3.png";
import featureIcon1 from "../assets/images/feature-icon1.png";
import featureIcon2 from "../assets/images/feature-icon2.png";

const Features = () => {
  return (
    <section id="features" className="bg-[#394fba] py-10 px-4">
      <div className="flex flex-col items-center gap-8">
        <p className="text-lg text-white text-center">
          Trusted by Teachers at over 1,000 of India&apos;s leading Schools
        </p>
        <div className="flex gap-5 md:gap-10">
          <img src={feature1} alt="feature image 1" className="h-20 md:h-28" />
          <img src={feature2} alt="feature image 2" className="h-20 md:h-28" />
          <img src={feature3} alt="feature image 3" className="h-20 md:h-28" />
        </div>

        <h1 className="text-4xl text-white text-center mt-10 md:text-6xl font-semibold">
          Features that <br /> work for your <br /> future.
        </h1>
        <span className="text-lg text-white text-center md:text-xl">
          Checkout our amazing features and experience the <br />
          power of MyEd for your schools.
        </span>

        <div className="flex flex-col md:flex-row gap-10 mt-12 w-full px-4 md:px-16 lg:px-32">
          <div className="flex flex-col items-start p-8 border border-white rounded-lg w-full md:w-1/2 bg-[#394fba] text-white shadow-[3px_3px_3px_rgba(255,255,255,0.5)]">
            <img
              src={featureIcon1}
              alt="Feature Icon 1"
              className="h-16 mb-6"
            />
            <h1 className="text-3xl font-semibold mb-4">Reports Dashboard</h1>
            <p className="mb-4">
              Our Dashboard provides a clear and intuitive interface for you to
              easily feed and analyze all your class reports and data of each
              student. From customizable graphs to real-time data updates. Our
              dashboard offers everything you need to gain valuable insights.
            </p>
            <a href="#" className="text-white text-md font-bold mt-2 underline">
              View dashboard
            </a>
          </div>

          <div className="flex flex-col items-start p-8 border border-white rounded-lg w-full md:w-1/2 bg-[#394fba] text-white shadow-[3px_3px_3px_rgba(255,255,255,0.5)]">
            <img
              src={featureIcon2}
              alt="Feature Icon 2"
              className="h-16 mb-6"
            />
            <h1 className="text-3xl font-semibold mb-4">AI Attendance</h1>
            <p className="mb-4">
              Say goodbye to taking Manual attendance taking and tracking. Take
              class attendance in just one snapshot.
            </p>
            <a
              href="#"
              className="text-white text-md font-semibold mt-2 underline"
            >
              View integration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
