import React from "react";

const SectionHeader = ({ title, description }) => {
  return (
    <div className="space-y-4 text-center font-Poppins">
      <h2 className="text-3xl font-bold tracking-wide text-SolidHeading dark:text-SolidHeadingDarkMode">
        {title}
      </h2>
      <p className="tracking-wider text-DarkContent dark:text-LightContent">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
