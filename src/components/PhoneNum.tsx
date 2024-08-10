import { useState } from 'react'
const PhoneNum = () => {
    const [phone, setphone] = useState("");
    const handleInputChange=(e:any)=>{
        let value = e.target.value;
    let numericValue = value.replace(/[^0-9]/g, "");

    if (numericValue.length > 2) {
      numericValue = `+91(${numericValue.slice(0, 2)})-${numericValue.slice(2)}`;
    }

    setphone(numericValue);
    }
    return (
    <>    
    <div>PhoneNum</div>
    <input type="text" placeholder='Type here' value={phone} onChange={handleInputChange}></input>
    </>
  )
}

export default PhoneNum