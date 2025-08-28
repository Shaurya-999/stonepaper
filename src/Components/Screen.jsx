function Screen({state,user,comp,winner}){
  return(
    <>
   <div className="md:w-[650px] md:h-[550px] bg-white rounded-lg text-center md:ml-[10px] mr-[10px] bg-linear-to-t from-sky-500 to-indigo-500 w-[220px] h-[400px] ml-[20%]">
    {!state && (<div>
        <h1 className="text-black font-bold md:text-[30px] text-[25px] mt-[10px]">Rules</h1>
         <p className="p-[7px]">In Stone Paper Scissors, stone breaks scissors, scissors cut paper, and paper covers stone. If both players choose the same option, the game ends in a draw.</p>
        </div>)}
         {user?<h2 className="md:mt-[10%] md:text-[24px] font-bold text-[18px]">You chose {user} </h2>:<h2 className="mt-[10%] text-[24px] font-bold">Choose Something.</h2>}
         {state && <h2 className="mt-[10%] text-[24px] font-bold">Computer chose {comp}</h2>}
         {state && (winner==="Draw") && <h2 className="mt-[10%] text-[24px] font-bold">We have a Draw</h2>}
          {state && (winner!=="Draw") && <h2 className="mt-[10%] text-[24px] font-bold">{winner} Won!!</h2>}
          {state && (<button className="w-[120px] h-[35px] bg-black text-white text-[16px]  mt-[20%] rounded-lg font-bold p-[4px]"onClick={() => window.location.reload()}>
  Play Again
</button>)} 
         
    </div> 
    </>
  )
}
export default Screen