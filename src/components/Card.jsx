/* eslint-disable react/prop-types */
import {MdGrade} from "react-icons/md"

const isSuperHost = (superHost) => {
    if(superHost){
        return (
            <div className="border border-lg  rounded-3xl px-2 py-1 border-gray-700 font-bold text-sm text-gray-700 mr-3">SUPER HOST</div> 
        )
    }
}

function Card({ item }){
    return (
         <div className="w-96 h-64 mb-36 mr-5 ml-5">
            <img className="w-full h-[17rem] rounded-3xl"
                 src={item.photo} alt="image"/>
            <div className="flex justify-between mt-4 itmes-center">
                <div className="flex">
                  <div>{isSuperHost(item.superHost)}</div>
                  <div className="text-gray-400">{item.type}</div>
                  <div className="ml-1 text-gray-400">{item.beds}</div>
                </div>
                <div className="flex items-center"> 
                    <MdGrade className="text-red-400 mr-1 text-2xl"/> 
                    <h5 className="text-gray-800">{item.rating}</h5>   
                </div>
            </div>
            <p className="mt-2 text-gray-700 font-bold text-lg">{item.title}</p>
        </div>   
    ) 
}


export default Card;