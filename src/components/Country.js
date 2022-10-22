import React, { useState, useEffect } from "react";
import axios from "axios";


function CountryList(props){
    const [countries, setCountries]=useState([]);


    useEffect(() => {
        axios
        .get("https://restcountries.com/v2/all")
        .then((response) => setCountries(response.data))
        .catch((error) => console.log({ error }));
    }, []);

    return countries
    .filter((country)=> 
        country.name.toLowerCase().includes(props.search.toLowerCase()))
    .map((country) => {

        return(

            <div key={country.name} className="country" style={{backgroundColor:"#e0e0e0", borderRadius:"15px",margin:"20px 0px 10px 0px", padding:"20px 10px 10px 10px"}}>
                <div className="container">

                
                <div>
                    <img src={country.flag} alt={country.name} style={{width: 10 +'em',borderRadius:"10PX"}}/> 
                </div>
                <div>
                    <h3>{country.name}</h3>
                    <p>{country.capital}</p>
                </div>
            </div>
            </div>
        );
    });

}

export default CountryList;


