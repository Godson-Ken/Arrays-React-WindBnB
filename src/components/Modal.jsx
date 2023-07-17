/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";       
import { useState, useEffect } from "react";
import Location from "./Location";
import Guest from "./Guest";
import { MdSearch } from "react-icons/md";

function Modal({onClose}){
    const [showList, setShowList]  = useState(false);
    const [showCounter, setShowCounter] = useState(false);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    const handleClose = () => {
        onClose()
    }

    return  (
        <div>
            {createPortal(
                <div>
                    <div onClick={handleClose} className="fixed inset-0 bg-gray-400 opacity-50">
                    </div>
                    <div className="fixed inset-0 p-5 bg-white h-[480px] w-full">
                          <div className="flex flex-row w-[1200px] h-16 mx-auto mt-8 border border-solid border-gray-100 rounded-lg shadow-md">
                                <div className="w-[400px] pl-8">
                                    <Location 
                                    setShowList={setShowList}  
                                    showList={showList}
                                    setShowCounter={setShowCounter} 
                                    />
                                    
                                </div>
                                <div className="h-full bg-gray-100 w-0.5"></div>
                                <div className="w-[400px] pl-8">
                                    <Guest  
                                        setShowCounter={setShowCounter} 
                                        showCounter={showCounter}
                                        setShowList={setShowList}
                                    />
                                </div>
                                <div className="h-full bg-gray-100 w-0.5"></div>
                                <div className="w-[400px] flex item-center justify-center">
                                    <div onClick={handleClose} className="w-[130px] flex items-center justify-center my-1 text-white bg-red-400 rounded-lg cursor-pointer hover:bg-red-500">
                                        <MdSearch className="text-3xl mr-2"/> Search
                                    </div>
                                   
                                </div>
                          </div>
                    </div>

                </div>,
                document.querySelector('.modal-wrapper')
            )}
        </div>       
    )
}

export default Modal;