"use client";

import Link from "next/link";
import GithubIcon from "../public/github-icon.svg";
import LinkdinIcon from "../public/linkedin-icon.svg";
import Image from "next/image";

const EmailSection = () => {

  function handleSubmit(event) {
    event.preventDefault();
  
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
  
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  
    window.open(mailtoLink, '_blank');
  }


  return (
    <div className="flex flex-col mt-16">
      <h4
        className="font-semibold text-4xl text-center text-pink-400"
        id="projects"
      >
        contact me
      </h4>
      <section
        className="grid md:grid-cols-2 py-12 gap-6 relative"
        id="contact"
      >
        {/* <div className="radial-purple rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
        <div className="">
          <h5 className="text-xl font-bold text-white my-2">lets conect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {""}
            I'm currently looking for a new opportunities, my inbox is always
            open. Ehether you have a question or just want to say hi, I' ll try
            my best to get back to you!
          </p>
          <div className="socials flex  flex-row gap-2">
            <Link href={"github.com"}>
              <Image
                src={GithubIcon}
                alt=""
                //   width={200}
                //   height={200}
              />
            </Link>
            <Link href={"linkdin.com"}>
              <Image
                src={LinkdinIcon}
                alt=""
                //   width={200}
                //   height={200}
              />
            </Link>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label
              htmlFor="email"
              className="text-white block mb-1 text-sm font-medium"
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

            <label
              htmlFor="subject"
              className="text-white block mb-1 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Just saying hi!"
              className="p-2.5 rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full"
            />

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Let's talk about..."
                className="p-2.5 rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EmailSection;
