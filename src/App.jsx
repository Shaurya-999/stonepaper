import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Card from './Components/Card'
import Screen from './Components/Screen'
import Options from './Components/Options'

function App() {
  const [start,setStart]=useState(false)
   const [user,setUser]=useState("")
   const [comp, setComp] = useState(null);
   const [result,setResult]=useState("")



   const options=["stone","paper","scissor"]
  function playRound(choice) {
  setUser(choice);

  const compChoice = options[Math.floor(Math.random() * 3)];
  setComp(compChoice);

  if (choice === compChoice) {
    setResult("Draw");
  } else if (choice === "stone") {
    setResult(compChoice === "scissor" ? "You" : "Computer");
  } else if (choice === "paper") {
    setResult(compChoice === "stone" ? "You" : "Computer");
  } else if (choice === "scissor") {
    setResult(compChoice === "paper" ? "You" : "Computer");
  }

  setStart(true);
}




  
   
  return (
    <>
      <Header />
      <div className='flex md:justify-center md:flex-row flex-col  justify-center items-center h-screen md:gap-[100px] gap-[4%]'>
      { start && (<div className="">
    <Card image={`/${comp}.png`} player={"Computer"} />
  </div>)}

  <div className="">
    <Screen   user={user} state={start} comp={comp} winner={result}/>
  </div>

  {!start && (<div className='flex flex-col gap-[10px]'>
    <h1 className='text-white'>Choose Your Option</h1>
    <Options opt="Stone" playeropt={() => playRound("stone")} />
<Options opt="Paper" playeropt={() => playRound("paper")} />
<Options opt="Scissor" playeropt={() => playRound("scissor")} />
  </div>)}

  { start && (<div className="">
    <Card image={`/${user}.png`} player={"You"} />
  </div>)}
  </div>
    </>
  )
}

export default App
