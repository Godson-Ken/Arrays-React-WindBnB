/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import {MdSearch} from "react-icons/md";
import Modal from './Modal';
import { ValueContext } from '../App'

function Header(){
    const [showModal, setShowModal] = useState(false);
    const {locationValue, guestValue} = useContext(ValueContext)

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    console.log('AM reloading from header component' + guestValue)
        return( 
                <div className="flex flex-row justify-between mt-10 px-[70px] relative">
                    {showModal && <Modal onClose={handleCloseModal} setShowModal={setShowModal}/>}
                    <img className="text-red-400 object-scale-down" src="/logo.png" alt="logo" />
                    <div onClick={handleOpenModal} className="flex flex-row border-2 border-gray-100 border-solid w-[20rem] h-12 rounded-lg">

                            <div  className="w-[9rem] flex items-center justify-center text-gray-400 cursor-pointer">
                                {locationValue  || 'Add location'}
                            </div>

                            <div className="h-full bg-gray-100 w-[2px]"></div>

                            <div className="w-[7rem] flex items-center justify-center text-gray-400 cursor-pointer">
                            { guestValue !== 0 && guestValue > 1? guestValue + ' guests': guestValue + ' guest' && 'Add guest'}
                            </div>

                            <div className="h-full bg-gray-100 w-[2px]"></div>

                            <div className="flex items-center justify-center text-2xl text-red-600 w-[4rem] cursor-pointer">
                                <MdSearch />
                            </div>
                    </div>
                </div>
        )
}

export default Header;