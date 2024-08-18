import React,{useState,useEffect} from 'react'
// const data=[
//     {
// name:"image1",
// image:"https://media.istockphoto.com/id/1529821833/photo/asian-multiethnic-business-people-talk-during-a-coffee-break-in-seminar-business-conference.webp?s=1024x1024&w=is&k=20&c=tr5DnBiQPP3cL8Q_tQpeCN-FNjNxFt4r7aL1qLiJpgE="
//     },
//    {
//     name:"image2",
// image:"https://media.istockphoto.com/id/1972286424/photo/digital-security-and-privacy-background-cyber-and-crypto-security-shield-on-futuristic-screen.jpg?s=1024x1024&w=is&k=20&c=pzv5ZXYe57o2theUg50zVMxA9B38a-rhy4oqZ7AyJME="
//    },
//    {
//     name:"image3",
// image :"https://media.istockphoto.com/id/1360927961/photo/abstract-background-with-interweaving-of-colored-lines-and-dots-network-connection-structure.jpg?s=612x612&w=0&k=20&c=UTu0m3kCMm6f1kien9TNCrFtliESKUMrAeyKkI5s56I="
//    } 
// ]
const CarouselApp = () => {

    
    const [imagesData, setimagesData] = useState([])

    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImage=async()=>{
            try{
           const res=await fetch("https://fakestoreapi.com/products")
            const data=await res.json();
            setimagesData(data);
            setLoading(false);
            }
            catch(err){

            }
        }
        fetchImage();
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    const handlePrev=()=>{
        setCurrentIndex((prevIndex:any)=>
    prevIndex===0?imagesData.length-1:prevIndex-1
   )
    }
    const handleNext=()=>{
       setCurrentIndex((prevIndex:any)=>
        prevIndex===imagesData.length-1?0:prevIndex+1
       )
    }

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <button style={{fontSize:'3em',marginRight:'10px'}} className="prev" onClick={()=>handlePrev()}> {"<"} </button>
        <img  style={{width:'50%',height:'40%'}} src={imagesData[currentIndex].image} alt={imagesData[currentIndex].name} />
        <button style={{fontSize:'3em',marginLeft:'10px'}} className="next" onClick={()=>handleNext()}>{">"}</button>
    </div>
  )
}

export default CarouselApp