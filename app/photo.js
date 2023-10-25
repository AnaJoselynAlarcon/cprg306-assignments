import React from "react";

const Photo = ({ src }) => {
  return (
    <Image
      src="/images/linkedin.png"
      alt="Student Photo"
      className="w-48 h-48 rounded-full mx-auto"
    />
  );
};

export default Photo;
