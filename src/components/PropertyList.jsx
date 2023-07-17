import { useContext } from "react";
import data from "../stays"
import Card from "./Card";
import { ValueContext } from '../App'

function PropertyList(){
    const {locationValue, guestValue} = useContext(ValueContext)
    
    let listContent = data.map((item, index) => {
          return <Card key={index} item={item} />
    });
    
    if(locationValue){
       listContent = data.filter(item => item.city == locationValue)
        .map((item, index) => {
            return <Card key={index} item={item} />
        })
    }

    if(guestValue){
        listContent = data.filter(item => item.maxGuests == guestValue)
        .map((item, index) => {
            return <Card key={index} item={item} />
        })
    }
    
    return <div className="mt-20 ">
        <div className="mb-8 flex justify-between text-gray-700 px-[66px]">
            <h2 className="font-bold text-2xl">Stays in Finland</h2>
            <h5 className="text-gray-800">12+ stays</h5>
        </div>
        <div className="flex flex-row item-center flex-wrap px-[44px]">
            {listContent}
        </div>
    </div>
}

export default PropertyList;