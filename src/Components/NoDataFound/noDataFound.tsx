import React from "react";
import NoDataFoundType from "../../Types/noDataFound";



const NoDataFound: React.FC<NoDataFoundType> = ({handleCreateAJob}) => {
  return (
    <div className="shadow-lg bg-white py-2 px-6 fixed top-0 left-0 h-full w-full flex flex-col justify-center items-center">
        No Jobs found for now. Please<button className="text-blue ml-1" onClick={() => handleCreateAJob()}> Create a Job</button>.
    </div>
  );
};

export default NoDataFound;
