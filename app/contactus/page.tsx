"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

interface FormState {
  from_name: string;
  email: string;
  message: string;
}

interface Errors {
  from_name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const [formState, setFormState] = React.useState<FormState>({
    from_name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<any>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = (): boolean => {
    let tempErrors: Errors = {};
    if (!formState.from_name) tempErrors.from_name = "Name is required";
    if (!formState.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formState.email))
      tempErrors.email = "Email is invalid";
    if (!formState.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (form.current) {
      emailjs
        .sendForm("service_8kti07s", "template_42ylu7c", form.current, {
          publicKey: "UpiVsMnPlgP3mi1dZ",
        })
        .then(
          () => {
            Swal.fire({
              icon: "success",
              title: "Message Sent!",
              text: "Your message has been successfully sent. We will get back to you soon.",
              confirmButtonColor: "#3085d6",
            });
            setFormState({ from_name: "", email: "", message: "" });
            setErrors({});
          },
          (error) => {
            console.error("FAILED...", error.text);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong! Please try again.",
            });
          }
        );
    }
  };

  return (
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-lg mx-auto my-10">
      <h2 className="text-2xl text-white font-bold mb-6 text-center">
        Contact Us
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        {/* Form fields */}
        {/* Name input */}
        <div className="mb-4">
          <label
            htmlFor="from_name"
            className="block text-white text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formState.from_name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            placeholder="Your Name"
          />
          {errors.from_name && (
            <p className="text-red-500 text-xs italic">{errors.from_name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        {/* Message input */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-white text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            rows={4}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            placeholder="Your Message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs italic">{errors.message}</p>
          )}
        </div>
        {/* Submit button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            value="Send"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
