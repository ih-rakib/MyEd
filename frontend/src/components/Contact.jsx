import { useState } from "react";
import Rocket from "../assets/images/rocket.png";
import { useCreateContactMutation } from "../redux/api/contactSlice";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    school: "",
    city: "",
    email: "",
    phone: "",
    message: "",
  });

  const [createContact, { isLoading, isSuccess, isError }] =
    useCreateContactMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createContact(formData).unwrap();
      alert("Information submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        school: "",
        city: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send message: ", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="bg-[#394fba] py-10 px-7 md:px-16 lg:px-36">
      <div className="border border-white rounded-lg py-12 shadow-[3px_3px_3px_rgba(255,255,255,0.5)] mx-auto">
        <div className="max-w-2xl mx-auto p-8">
          <h1 className="text-3xl font-semibold text-white mb-2">
            Get Ready to Board the Rocket
          </h1>
          <p className="mb-10 text-gray-300">
            Let&apos;s align our constellations! Reach out and let the magic of
            collaborations illuminate our skies.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="flex-1 p-2 bg-[#3861b4] border border-gray-300 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="flex-1 p-2 bg-[#3861b4] border border-gray-300 rounded-md text-white focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="School Name"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="p-2 bg-[#3861b4] border border-gray-300 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="p-2 bg-[#3861b4] border border-gray-300 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 bg-[#3861b4] border border-gray-300 rounded-md text-white focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 bg-[#3861b4] border border-gray-300 rounded-md text-white focus:outline-none"
            />
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 bg-[#3861b4] border border-gray-300 rounded-md text-white focus:outline-none"
              rows="4"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold py-2 rounded-md mt-4 hover:bg-gradient-to-l transition duration-300"
            >
              <div className="gap-2 flex items-center justify-center cursor-pointer">
                <span>{isLoading ? "Sending..." : "Send it to the Moon"}</span>
                <img src={Rocket} alt="Send icon" className="h-4" />
              </div>
            </button>

            {isError && (
              <p className="text-red-500 mt-2">
                Something went wrong. Please try again.
              </p>
            )}
            {isSuccess && (
              <p className="text-green-500 mt-2">
                Information submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
