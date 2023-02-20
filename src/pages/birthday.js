import React, { useState, useEffect } from "react";
import getNextBirthdayTime from "../utils/timeleft";
import { Timer } from "../components/timer.js";

export const Birthday = () => {
    const [info, setInfo] = useState({});
    const [nextBirthday, setNext] = useState();
    const getInformation = () => {
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
        .then(result => {setInfo(result)
                        {setNext(getNextBirthdayTime(result.birthdate))}
                        console.log(result)
        })
        .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        getInformation();

        
    },[])
    return (<div>
        {info && <h1>Hello {info.name}, your birthdate is {info.birthdate}, your nex birthday is {nextBirthday}</h1>}
        {info && <Timer birthday={info.birthdate}/>}
    </div>);
}