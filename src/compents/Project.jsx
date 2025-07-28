import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-10 gap-y-6 sm:gap-y-0 sm:gap-x-8 group"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        {/* Left Section - Title & Tags */}
        <div>
          <p className="text-2xl font-semibold text-white">{title}</p>
          <div className="flex flex-wrap gap-3 mt-3 text-sm text-sand">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 bg-neutral-800 rounded-full border border-neutral-600"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section - Read More */}
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-4 h-4" alt="arrow" />
        </button>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      {/* Project Details Modal */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
