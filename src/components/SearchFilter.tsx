import {useState} from "react"

export default function SearchFilter() {
  const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange", "Pineapple", "Strawberry", "Grapes", "Watermelon", "Peach"];
  const [search,setsearch]=useState("");
  const [fruitsList,setFruitsList]=useState(fruits);
  const handleInputChange=(e:any)=>{
    setsearch(e.target.value);
  }
  const highlightText = (text: string, highlight: string) => {
    const startIndex = text.toLowerCase().indexOf(highlight.toLowerCase());
    if(startIndex==-1 || highlight===""){
      return text;
    }
    const endIndex=startIndex+highlight.length;
    return (
      <>
      
        {text.slice(0,startIndex)}
        {<b>{text.slice(startIndex, endIndex)}</b>}
        {text.slice(endIndex)}
      
      </>
    )
  }
  const filteredFruits=fruitsList.filter((fruit)=>fruit.toLowerCase().includes(search.toLowerCase()))

  return (  
    <main>
      <input type="text" placeholder='search'
        onChange={handleInputChange}
        ></input>
      {
          filteredFruits.length>0?
          filteredFruits.map((fruit, index) => (
        <p key={index}>{highlightText(fruit, search)}</p>
      )): <p>No results </p>}
    </main>
  )
}
