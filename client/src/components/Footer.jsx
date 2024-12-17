import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center p-4">
      <p className="text-[18px] ">Copyright &copy; {currentYear} || Skill 🔁 Swap</p>
    </div>
  );
};

export default Footer;
