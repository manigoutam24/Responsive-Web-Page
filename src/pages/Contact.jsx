import React, { useState } from "react";
import { Form } from "react-router-dom";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="w-full mt-5 mb-8">
      <div className="w-full  flex justify-center items-center">
        <Form
          onSubmit={handleSubmit}
          className="bg-zinc-200 md:rounded-full rounded-lg p-5 w-85 md:w-120 md:p-20 space-y-5"
        >
          <h2 className="text-center text-xl font-semibold">Get in Touch</h2>

          <div className="flex flex-col">
            <label className="text-lg font-semibold" htmlFor="name">
              Name <sup className="text-[14px] text-red-500">*</sup>
            </label>
            <input
              className="px-2 py-1 focus:ring-1 outline-0 rounded-md border-0 focus:ring-gray-400"
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name.."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold" htmlFor="email">
              Email <sup className="text-[14px] text-red-500">*</sup>
            </label>
            <input
              className="px-2 py-1 focus:ring-1 outline-0 rounded-md border-0 focus:ring-gray-400"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold" htmlFor="message">
              Message <sup className="text-[14px] text-red-500">*</sup>
            </label>
            <textarea
              className="px-2 py-1 focus:ring-1 outline-0 rounded-md border-0 focus:ring-gray-400"
              id="message"
              name="message"
              required
              placeholder="Feedback...."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            className="w-1/2 bg-blue-600 hover:bg-blue-700 py-2 px-3 rounded-lg text-white text-[15px] flex justify-center items-center gap-2"
            type="submit"
          >
            Send Message <IoIosSend />
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
