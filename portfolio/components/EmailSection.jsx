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

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.open(mailtoLink, "_blank");
  }

  return (
    <motion.div
      className="flex flex-col !mt-16"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h4
        whileInView={{ opacity: 1, x: -50 }}
        initial={{ opacity: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-semibold text-4xl text-center text-pink-400"
        id="projects"
      >
        contact me
      </motion.h4>

      <motion.section
        className="grid xl:grid-cols-2 py-12 !gap-6 md:gap-12 relative"
        id="contact"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h5 className="text-xl font-bold text-white my-2">lets conect</h5>
          <p className="text-[#ADB7BE] !mb-4 max-w-md">
            I'm currently looking for a new opportunities, my inbox is always
            open. Ehether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href={"https://github.com/taniaa-sh"} target="_blank">
              <Image src={GithubIcon} alt="" />
            </Link>
            <Link href={"https://linkedin.com/in/tania-shafiee"} target="_blank">
              <Image src={LinkdinIcon} alt="" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="ml-10 xl:ml-0"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center self-center w-full">
            <motion.div
              whileInView={{ opacity: 1, x: -50 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full"
            >
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
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: -50 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full"
            >
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
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: -50 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="!mb-6 w-full"
            >
              <label
                htmlFor="message"
                className="text-white block text-sm !mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                maxLength={500}
                resize="none"
                id="message"
                name="message"
                required
                placeholder="Let's talk about..."
                className="p-2.5 -mt-1 resize-none h-40 rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full"
              />
            </motion.div>

           <div className="w-full mr-24">
             <motion.button
            //  whileInView={{ opacity: 1, x: -50 }}
            //   initial={{ opacity: 0, x: 0 }}
            //   transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            //   viewport={{ once: true }}
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 !px-5 rounded-lg w-full cursor-pointer"
            >
              Send Message
            </motion.button>
           </div>
          </form>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default EmailSection;
