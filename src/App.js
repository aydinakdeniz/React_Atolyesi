//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import EventEx from './components/EventExample';
import Kosul from './components/Conditional_Rendering';
import ArrayList from './components/Array_List';
import Form from './components/Form';
import CountryList from './components/Country';
import SearchForm from './components/SearchForm';


function App() {

  const [isim, setIsim]= useState(true);
  const [sayi, sayiSet] = useState(0);
  const [search, setSearch] =useState("");
  const handleChange = event => setSearch(event.target.value);

  console.log("App seviyesinde search", search)
  
  
  // useEffect(() => {
  //     document.title = sayi
  //     console.log("xx")
  //   }
  //   )


  return (

      <div className='container'>

        {/* <h1>Merhaba {isim}</h1>
        {isim ? "Aydin" : "Mehmet"}
        <button>Tikla</button>
        <button onClick={()=>setIsim(!isim)}>İsmi Değiştir</button>

        <MesajGoster/>
        <button onClick={() => sayiSet(sayi + 1)}>Tikla</button> {sayi} */}

       
        

        {/* <Kosul></Kosul>

        <ArrayList></ArrayList> */}

        {/* <Form></Form> */}

        
        <SearchForm search={search} onSearchChange={handleChange}/>
        <CountryList search={search}/>


      </div>


      
    

  );

 
  
  
  }


  // function Hosgeldiniz(props) {
  //   return (
    
  //        <div className='container-fluid'>
  //           <h1>Hoşgeldiniz  {props.ad}</h1>
  //            {props.children}
  //         </div>
    
  //   );
  // }

  
  
  // function MesajGoster() {

  //   const [yazi, setYazi]= useState(true);

  //   return (
  //     <div className='container'>
       
  //       {yazi ? (<h3>Hayattaki en hakiki mürşit ilimdir.</h3>):(<h3>Beni Türk Hekimlerine Emanet Ediniz</h3>)}

  //       <button onClick={() => setYazi(!yazi)}>Mesajı Değiştir</button>

  //       </div>
  //   )
  // }
  
  // function Test(){
  //   const [sayi, sayiSet] = useState(0);

 

  //   return(
  //     <div>
  //        {sayi}
  //       <button onClick={() => sayiSet(sayi + 1)}>Tikla</button>;
  //       document.title = `${sayi}`
  //     </div>
  //   )
  // }

export default App;

