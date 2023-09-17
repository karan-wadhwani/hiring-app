import React from "react";
import Button from "../Button/button";
import HeaderType from "../../Types/header";

const Header: React.FC<HeaderType> = ({handleToggle, toggle}) => {
    const handleCreateJob = () => {
        handleToggle(!toggle);
    }
  return (
    <div className="shadow-lg bg-white py-2 px-6 fixed top-0 left-0 w-full z-20">
        <Button bordered={true} title="Create Job" handleSubmit={handleCreateJob}/>
    </div>
  );
};

export default Header;
