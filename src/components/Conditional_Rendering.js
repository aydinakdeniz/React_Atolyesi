import React,{useState} from 'react';

function Kosul ()
{
const [isim, setIsim]= useState("");
const [girisYapildi, setGirisYapildi]= useState(false);
const [hataMesaji, setHataMesaji]= useState("");

const handleChange = event=> setIsim(event.target.value);

const handleSubmit = isim => {
    if(isim.length <6){
        setHataMesaji("Kullanici en az 6 karakter olmalı")
    }  
    else {
        setHataMesaji("");
        setGirisYapildi(true);
    }

}

return(
        <div className="container">
            <h1>React Dersleri</h1>
            { girisYapildi ? (
            

            <React.Fragment>
            <h2>Hoş Geldiniz {isim}</h2>
            <button onClick={() => setGirisYapildi(false)}>Cikis</button>
            </React.Fragment>

            
             
            )
            
            :(
            <React.Fragment>

            <input name="isim"
            placeholder="isminiz"
            value={isim}
            onChange={handleChange}
        />
        <button onClick={() => handleSubmit(isim)}>Giriş</button>
            
        {hataMesaji? <h4>{hataMesaji}</h4> :<h2>Giriş Yapınız</h2>}
        
        </React.Fragment>
            )
         }
        </div>
      );
}

export default Kosul;