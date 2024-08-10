import { useEffect,useState } from 'react'
const useDebounce=(text:string,delay:number)=>{
    const [debounce, setdebounce] = useState(text);
    useEffect(()=>{
    const timeout=setTimeout(() => {
        setdebounce(text);
    }, delay);

    return(()=>{
        clearTimeout(timeout)
    })
    },[text,delay])
 return debounce;
}
const Debounce = () => {
    const [text, settext] = useState('');
    const debounceText=useDebounce(text,2000);
    const handleInputChange=(e:any)=>{
      settext(e.target.value)
    }
  return (
    <>
    <div>Debounce</div>
    <input type="text" value={text} onChange={handleInputChange} placeholder='Type here' ></input>
   <p>{debounceText}</p>
    </>
  )
}

export default Debounce