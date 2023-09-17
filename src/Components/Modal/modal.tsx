import React from "react";
import {IoIosCloseCircleOutline} from "react-icons/io"
import ModalType from "../../Types/modal";

const Modal: React.FC<ModalType> = ({children, onModalClose}) => {
  return (
    <div className="flex justify-center bg-light-grey/60 items-center absolute w-screen h-screen z-30">
        <div className="bg-white w-3/5 p-8 rounded-md relative">
            <button className="absolute top-2 right-2" onClick={() => onModalClose()}><IoIosCloseCircleOutline/></button>
            {children}
        </div>
    </div>
  );
};

export default Modal;
