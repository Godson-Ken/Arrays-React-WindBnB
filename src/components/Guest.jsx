import { MdOutlineRemove, MdOutlineAdd } from 'react-icons/md';
import { useContext, useState, useEffect } from 'react';
import { ValueContext } from '../App';

// eslint-disable-next-line react/prop-types
function Guest({setShowCounter, showCounter, setShowList}){
    const [adultValue, setAdultValue] = useState(0);
    const [childrenValue, setChildrenValue] = useState(0)
    
    

    let guestCount;
   // console.log('AM reloading from guest component ')

    const {guestValue, setGuestValue} = useContext(ValueContext)

    const handleShowCounter = () => {
        setShowCounter(!showCounter);
        setShowList(false);
    };

   
    const handleCounterIncrease = (countType) => {
       if(countType === 'Adult'){
            setAdultValue(adultValue + 1);
        
       } else if(countType === 'Children'){
            setChildrenValue(childrenValue + 1)
       }
    }

    
    const handleCounterDecrease = (countType) => {
        if(countType === 'Adult' && adultValue > 0){
            setAdultValue(adultValue - 1);

        } else if(countType === 'Children' && childrenValue > 0){
            setChildrenValue(childrenValue -  1)
        }
     } 

    guestCount = adultValue + childrenValue;

    useEffect(() => {
        setGuestValue(guestCount);
    },[setGuestValue, guestCount])
    

    return(
        <div>
             <div className="mt-[0.8rem] mb-2">
                <h4 className="text-[11px] uppercase font-semibold mb-0.5 text-gray-800">
                    guest
                </h4>
                <div onClick={handleShowCounter} className="text-sm text-gray-500 cursor-pointer">
                   { guestValue > 1? guestValue + ' guests' : guestValue + ' guest' || 'Add guest' }
                </div>
            </div>
            {showCounter && <div className='mt-12'>
                <div>
                    <h4 className='text-[15px] text-gray-500 font-semibold'>Adults</h4>
                    <p className='text-[15px] text-gray-400'>Ages 13 or above</p>
                    <div className='flex flex-row items-center mt-4 w-[100px] justify-between'>
                        <div onClick={() => handleCounterDecrease('Adult')} className='border border-gray-300 p-1 rounded- cursor-pointer'><MdOutlineRemove /></div>
                        <div>{adultValue}</div>
                        <div onClick={() => handleCounterIncrease('Adult')} className='border border-gray-300 p-1 rounded-md cursor-pointer'><MdOutlineAdd /></div>
                    </div>
                </div>

                <div className='mt-14'>
                    <h4 className='text-[15px] text-gray-500 font-semibold'>Children</h4>
                    <p className='text-[15px] text-gray-400'>Ages 2 to 12</p>
                    <div className='flex flex-row items-center mt-4 w-[100px] justify-between'>
                        <div onClick={() => handleCounterDecrease('Children')}
                             className='border border-gray-300 p-1 rounded-md cursor-pointer'><MdOutlineRemove /></div>
                        <div>{childrenValue}</div>
                        <div onClick={() => handleCounterIncrease('Children')} className='border border-gray-300 p-1 rounded-md cursor-pointer'><MdOutlineAdd /></div>
                    </div>
                </div>
            </div> }
        </div>
    )
}

export default Guest;