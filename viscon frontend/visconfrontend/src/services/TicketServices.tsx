import { useEffect, useState } from 'react';


const TicketServices = () => {
    //To get the userId saved in the localStorage with the "currentUser" key.
    const [user, setUser] = useState([]);
    useEffect(() => {
        const user = localStorage.getItem("currentUser");
        if (user != null) {
            let parsedUser = JSON.parse(user);
            setUser(parsedUser.Id);
        } 
    })
}

export default TicketServices;