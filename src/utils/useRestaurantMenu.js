import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react"; 

function useRestaurantMenu({resID}) {
    const [resInfo, setResInfo] = useState(null);  
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      const response = await fetch(MENU_API + resID);
      const json = await response.json()      
        setResInfo(json.data);

        
    };
    
    return resInfo;
}

export default useRestaurantMenu;