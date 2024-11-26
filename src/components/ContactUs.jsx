import React, { useState, useEffect } from "react";

function PortfolioContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch predefined subjects from the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/subjects")
      .then((res) => res.json())
      .then((data) => setSubjects(data))
      .catch((err) => console.log(err));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !subject || !message) {
      setResponseMessage("All fields are required.");
      return;
    }

    const formData = { name, email, subject, message };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000); // Hide success message after 3 seconds
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setResponseMessage(result.msg || "Something went wrong.");
      }
    } catch (err) {
      setResponseMessage("Error submitting form. Please try again.");
      console.error(err);
    }
  };

  return (
    <div id="contact" className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] m-auto p-10 mb-32 text-white rounded-3xl border border-gray-700 bg-gray-900">
      <h1 className="text-4xl font-bold leading-snug text-center mb-6">
        Get in Touch
      </h1>
      <p className="text-lg text-gray-400 text-center mb-8 font-[anzo3]">
        Have a question or want to work together? Fill out the form below, and
        I'll get back to you!
      </p>
      <form
        className="space-y-6 max-w-2xl m-auto"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-lg font-medium mb-2">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a subject</option>
            {subjects.map((subj, index) => (
              <option key={index} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-semibold"
        >
          Send Message
        </button>
      </form>

      {/* Response Message with Animation */}
      {isSubmitted && (
        <div
          className="mt-4 text-center text-lg text-gray-300 animate__animated animate__fadeIn animate__delay-1s"
        >
          <p>Message sent successfully!</p>
        </div>
      )}

      {responseMessage && !isSubmitted && (
        <p className="mt-4 text-center text-lg text-gray-300">{responseMessage}</p>
      )}
    </div>
  );
}

export default PortfolioContactForm;
