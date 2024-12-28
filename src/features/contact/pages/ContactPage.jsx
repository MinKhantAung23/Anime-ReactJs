import { useState } from "react";
// import BreadCrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormStatus("Submitting...");
    setTimeout(() => {
      setFormStatus(
        "Thank you for reaching out! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <Container>
      {/* <BreadCrumb currentPageTitle={"Contact Us"} /> */}
      <div className="min-h-screen py-12 px-6 bg-dark text-gray-200">
        <div className="max-w-2xl mx-auto bg-gray-800 shadow-lg rounded-lg p-10">
          <h1 className="text-4xl font-extrabold text-center text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-center text-gray-300 mb-8">
            We’d love to hear from you! Fill out the form below and we’ll get
            back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                className="block text-sm font-semibold text-gray-400 mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all duration-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-gray-400 mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-gray-400 mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all duration-300"
                placeholder="Write your message here"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 focus:outline-none transition-all duration-300"
            >
              Submit
            </button>
          </form>
          {formStatus && (
            <p className="text-center mt-6 text-green-400 font-semibold text-lg">
              {formStatus}
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
