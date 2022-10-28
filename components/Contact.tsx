import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

import emailjs from "@emailjs/browser";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  message: string;
};

function Contact({}: Props) {
  const form = useRef<HTMLFormElement | any>();
  const [success, setSuccess] = useState<boolean>(false);
  const removeMessage = () => {
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const { name, email, message } = formData;
    const testData = formData.toString();
    console.log(name, email, message);
    setSuccess(false);
    emailjs
      .sendForm(
        "service_gkim0oq",
        "template_9gjdl3o",
        form.current,
        "7ZLVBAv1iu2wmexBb"
      )
      .then(
        (result) => {
          setSuccess(true);
          removeMessage(); //removes message after 5 seconds
          reset(); //resets the form
        },
        (error) => {
          //console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative"
    >
      {/* <h3 className="body__heading">Contact</h3> */}
      <div className="body__main  justify-center">
        <div className="flex flex-col space-y-10">
          <h4 className="text-3xl font-semibold text-center space-y-10">
            <span className="decoration-[#F7AB0A] underline">Lets Talk</span>
          </h4>

          <div className="flex flex-col md:flex-row items-center md:space-x-5 space-y-3 md:space-y-0 justify-center">
            <div className="flex space-x-2  items-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 animate-pulse" />
              <p className="text-xl">abhi.baidya@gmail.com</p>
            </div>

            <div className="flex space-x-2  justify-items-left  items-center">
              <MapPinIcon className="text-[#F7AB0A] h-6 w-6 animate-pulse" />
              <p className="text-xl">Gothenburg ( Sweden )</p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 mx-auto w-full"
          >
            {success ? (
              <span className="text-xs text-[#F7AB0A] animate-bounce text-center">
                I have recieved your message. Will surely buzz you ASAP
              </span>
            ) : (
              ""
            )}

            <input
              {...register("name", { required: true })}
              placeholder="Name"
              type="text"
              className="contactInput"
            />
            {errors.name && (
              <span className="text-xs text-orange-500">
                Name field is required
              </span>
            )}
            <input
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              placeholder="Email"
              className="contactInput"
            />
            {errors.email?.message && (
              <span className="text-xs text-orange-500">
                Valid email Id is required
              </span>
            )}
            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              className="contactInput"
            ></textarea>
            {errors.message && (
              <span className="text-xs text-orange-500">
                Message field is required
              </span>
            )}
            <button className="bg-[#F7AB0A] py-5 px-10 rounded text-black font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
