import { useState, createContext  } from "react";
import Header from "./components/Header";
import PropertyList from "./components/PropertyList";

const ValueContext  = createContext();

function App() {
  const [locationValue, setLocationValue]  = useState('');
  const [guestValue, setGuestValue] = useState(0);
  
  const valueToShare = {
    locationValue, setLocationValue, guestValue, setGuestValue
  }
  
  console.log('AM reloading from app component' + guestValue)

  return(
    <ValueContext.Provider value={valueToShare}>
        <div className="w-[1440px] px-[40px] mx-auto  h-full">
              <>
                <Header/> 
              </>
              <>
                <PropertyList />
              </>     
        </div>
    </ValueContext.Provider>
  )
}

export { ValueContext }
export default App
