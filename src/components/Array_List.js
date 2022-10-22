import React, {useState, useEffect} from 'react';

const data = [
    { name: "Ahmet" },
    { name: "Mehmet" },
    { name: "Ali" },
    { name: "Veli" },
    { name: "Ahmet" }
];

function ArrayList(){
    const [users, setUsers]=useState(data);
  
    
    return(

        <div className='container'>
            <h1>React Dersleri --Arama</h1>

            <input placeholder='Arama' />

            {users.map( (e, index) => {

                return (<User key={index} e={e} />);
                      
                })}
        </div>

    );



}

function User(props) {
    return (
            <div>
                <p>{props.e.name}</p>
            </div> 
           );
}





export default ArrayList;
