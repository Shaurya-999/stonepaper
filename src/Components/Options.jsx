function Options({opt,playeropt}){
  return(
      //  <div className="h-[30px] w-[200px] rounded-lg text-black bg-white hover:bg-black hover:text-white active:bg-black active:text-white" onClick={playeropt}> 
         <button className=" h-[30px] md:w-[120px] w-[100px] rounded-lg text-black bg-white hover:bg-black hover:text-white active:bg-black active:text-white" onClick={playeropt}>{opt}</button>
       
  )
}
export default Options