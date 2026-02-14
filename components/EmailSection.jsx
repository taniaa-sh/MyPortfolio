"use client";

import Link from "next/link";
import GithubIcon from "../public/github-icon.svg";
import LinkdinIcon from "../public/linkedin-icon.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
  function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.open(mailtoLink, "_blank");
  }

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="flex flex-col !mt-16"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h4
        className="flex justify-center items-center font-semibold text-2xl md:text-4xl !text-center text-pink-400"
        variants={fadeUp}
      >
        contact me
      </motion.h4>

      <motion.section className="w-full grid xl:grid-cols-2 py-12 !gap-6 md:gap-12 relative">
        <motion.div variants={itemLeft}>
          <h5 className="text-xl font-bold text-white my-2">lets connect</h5>
          <p className="text-[#ADB7BE] !mb-4 max-w-md">
            I'm currently looking for new opportunities. My inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href={"https://github.com/taniaa-sh"} target="_blank">
              <Image src={GithubIcon} alt="GitHub" />
            </Link>
            <Link
              href={"https://linkedin.com/in/tania-shafiee"}
              target="_blank"
            >
              <Image src={LinkdinIcon} alt="LinkedIn" />
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemRight}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 justify-center items-center self-center w-full"
          >
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-white block !mb-1 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="name@gmail.com"
                className="p-2.5 rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="subject"
                className="text-white block !mb-1 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Just saying hi !"
                className="p-2.5 rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full"
              />
            </div>

            <div className="!mb-6 w-full">
              <label
                htmlFor="message"
                className="text-white block text-sm !mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                maxLength={500}
                id="message"
                name="message"
                required
                placeholder="Let's talk about..."
                className="p-2.5 -mt-1 resize-none h-40 rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full"
              />
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 !px-5 rounded-lg w-full cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default EmailSection;
