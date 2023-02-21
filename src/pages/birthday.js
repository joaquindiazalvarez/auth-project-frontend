import React, { useState, useEffect } from "react";
import { Timer } from "../components/timer.js";
import cake from "../assets/cake.png"

export const Birthday = () => {
    const [info, setInfo] = useState({});
    const getInformation = () => {
        //This fetch brings name and birthdate from backend
        var myHeaders = new Headers();
        const token = sessionStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(process.env.REACT_APP_BACKEND_URL + "/auth/getinformation/", requestOptions)
        .then(response => response.json())
        .then(result => setInfo(result))
        .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        //brings information at the first load of the page
        getInformation();        
    },[])
    return (<div className="text-center">
        {info && <h1>Hello {info.name}!</h1>}
        {info && <Timer birthday={info.birthdate}/>}
        <img src={cake} alt="cake"></img>
    </div>);
}