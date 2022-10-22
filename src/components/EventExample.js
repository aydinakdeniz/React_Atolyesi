import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState } from "react";
import { InputHTMLAttributes } from "react";


function EventEx() {
const ABC= document.querySelector("#x")







return(
    <div onClick={()=>console.log("dive tıklandı")} className="mt-5">
            
            <div className="form-group">
            <form onSubmit={ e => {
                
                                        e.preventDefault(); console.log("Form Gönderildi.") 
                
                                  }    
                
                            }>

                Isim:<input 
                name="isim"
                placeholder="6 karakter"id="x"
                

                onCopy={(e)=>{e.preventDefault(); alert("copy yapamazsın kardes"); 
                
                 return false;
                     
                  
                    }
                    
                     }
                     
                onClick={(e)=>{ e.stopPropagation(); console.log("input tıklandi")}}
                 onFocus={(e)=>  console.log("İmleç in.")}

                 onBlur={(e)=> {

                    const name = e.target.value;

                    if(name.length < 6) {

                        console.log("az")
                        alert("Lütfen 6 karakterden fazla giriniz")
                        
                    }
                   
                    console.log("imleç out")
                 }
                }

                onChange={(e) => 

                    console.log("Birşey Yazıldı",e.target.name, e.target.value)
                    
                    } />
                
            </form>

            
            </div>
    </div>

    
)
    
}

export default EventEx;