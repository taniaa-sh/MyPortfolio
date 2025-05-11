import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative h-60 md:h-80 group rounded-t-2xl !overflow-hidden">
        <img src={imgUrl} alt="project" className="w-full h-full object-fill" />
        <div
          className="items-center justify-center overlay absolute !top-0 !left-0 w-full h-full bg-[#181818]/40 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
          style={{
            backdropFilter: "blur(2px)",
          }}
        >
          {gitUrl == "" ? (
            ""
          ) : (
            <Link
              href={gitUrl ? gitUrl : ""}
              className="h-14 w-14 !mr-2 border-3 relative rounded-full border-white hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-white absolute top-2 left-1.5 -translate-x-1/2 -translate-y-1/2" />
            </Link>
          )}

          <Link
            href={previewUrl}
            className="h-14 w-14 border-3 relative rounded-full border-white hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-white absolute !top-2 !left-1.5 transform -!translate-x-1/2 -!translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="font-xl font-semibold !mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
