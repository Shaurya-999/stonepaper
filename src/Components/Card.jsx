

function Card({image,player}){
 return(
   <>
    <div className="container md:h-[190px] md:w-[180px] flex-col bg-white justify-center rounded-lg h-[120px] w-[100px]"> 
   <h1 className="font-bold md:text-[20px] text-black text-shadow-lg text-center" >{player}</h1>
   
    <img src={image} alt="img" className="md:w-[180px] md:h-[140px] w-[100px] h-[90px] " />
    </div>
    </>
 )
}

export default Card