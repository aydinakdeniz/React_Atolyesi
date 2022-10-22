import React, { useState } from 'react'


function Form(){

const [form, setForm] = useState({isim: "", sehir:"",bio:""});
const [isim, setIsim] = useState("");
const [sehir, setSehir] = useState("");
const [bio, setBio]=useState("");
const handleChange = event=> setForm({...form, [event.target.name]: event.target.value })

console.log({isim,sehir,bio})
console.log(form)
    return (
      <div className='container-sm'>

        <h1>React Dersleri Form Çalışması</h1>
        <form>
            
            <input value={form.isim} onChange={handleChange} placeholder='Adınız' name="isim" />
            <br></br>
            <select value={form.sehir} onChange={handleChange} name="sehir">
                <option value="" disabled>Şehir Seçiniz</option>
                <option value="ankara">ankara</option>
                <option value="istanbul">istanbul</option>
                <option value="izmir">izmir</option>
            </select>
            <br/>

            <textarea value={form.bio} onChange={handleChange} rows="10" placeholder='Biyografi' name="bio"/>
            <br></br>
            <button>Gönder</button>
            
        </form>
    </div>
    )
  
}

export default Form;