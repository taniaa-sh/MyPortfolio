import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-purple-900 via-black to-purple-800 text-white py-8 mt-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          {/* <h2 className="text-xl font-semibold">طراحی‌شده با ❤️ توسط [تانیا]</h2> */}
          {/* <p className="text-sm text-gray-300 !mt-2">
            © {new Date().getFullYear()} همه‌ی حقوق محفوظ است.
          </p> */}
        </div>
        <div className="flex gap-4 md:!mt-0">
          <Link
            href="https://github.com/taniaa-sh"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/tania-shafiee"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            href="mailto:taniashafiee78@gmail.com"
            className="hover:text-purple-400 transition"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
