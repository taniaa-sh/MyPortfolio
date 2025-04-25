import Link from "next/link";
import GithubIcon from "../public/github-icon.svg"
import LinkdinIcon from "../public/linkedin-icon.svg"
import Image from "next/image";

const EmailSection = ({active,selectTab,children}) => {
    return (
        <section className=" grid md:grid-cols-2 my-12 md:my-12 py-24 gap-6 relative" id="contact">
            {/* <div className="radial-purple rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">lets conect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {""}
                    I'm currently looking for a new opportunities, my inbox is always open.
                    Ehether you have a question or just want to say hi, I' ll try my best
                    to get back to you!
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
                <form className="flex flex-col gap-4">
                    <label htmlFor="email" typeof="email" className="text-white block mb-1 text-sm font-medium">your email</label>
                    <input type="email" id="email" required placeholder="name.gmail.com" className="p-2.5 rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full" />
                    <label htmlFor="subject" typeof="email" className="text-white block mb-1 text-sm font-medium">subject</label>
                    <input type="text" id="subject" required placeholder="just  saying hi!" className="p-2.5 rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full" />
                    <div className="mb-6">
                        <label 
                           htmlFor="message"
                           className="text-white block text-sm mb-2 font-medium">
                            message
                        </label>
                        <textarea 
                        name="message" 
                        id="message" 
                        className="p-2.5 rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full"
                        placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                      type="submit"
                      className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                        send message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default EmailSection