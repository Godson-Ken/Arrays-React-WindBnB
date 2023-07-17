
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdRoom } from "react-icons/md";
import { ValueContext } from '../App'


function Location({setShowList, showList, setShowCounter}){
   // let { selectedValue } = useContext(ValueContext);
   const {locationValue, setLocationValue} = useContext(ValueContext);

    const locationList = [
        'Helsinki',
        'Turku',
        'Oulu',
        'Vaasa'
    ];

    const handleShowList =() => {
        setShowList(!showList);
        setShowCounter(false);
    };

  
    const handleSelectLocation = (item) => {
       setLocationValue(item);
    };

    let content;
    content = locationList.map((item, index) =>{
       return(
        <div onClick={() => handleSelectLocation(item)}  key={index} className="flex items-center mb-8">
            <MdRoom className="text-2xl text-gray-800"/> <div className="ml-4 text-gray-500 font-medium cursor-pointer">{item}</div>
        </div>
       )
    });
    
    return(
        <div>
            <div onClick={handleShowList} className="mt-[0.8rem] mb-2">
                <h4 className="text-[11px] uppercase font-semibold mb-0.5 text-gray-800">
                    Location
                </h4>
                <div className="text-sm text-gray-500 cursor-pointer">
                   {locationValue || 'Add location'}
                </div>            </div>
            <div className="mt-12 ml-[-4px]">{showList && content}</div>
        </div>

    );
}

export default Location;