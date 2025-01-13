import { useState } from 'react';
import { createRoot } from 'react-dom/client';


function Square({id, fun}){
    
    return (
    <button id = {id} onClick = {fun}  >" "</button>

)}
function Board(){
    const [turn, setTurn] = useState(0)
    
    function selected(id){
        let XOrO = "x"
        if (turn % 2 == 0){
            XOrO = "x"
            setTurn((turn + 1)%2) 
        } else {
            XOrO = "o"
            setTurn((turn + 1)%2) 
        }
        
        document.getElementById(id).textContent = XOrO;
    console.log("hit")
    } 
return(
    <>
    <div>
    <Square id = "Square1" fun={() => selected("Square1")}/> <Square id = "Square2" fun={() => selected("Square2")}/> <Square id = "Square3" fun={() => selected("Square3")}/>
    </div>
    <div>
    <Square id = "Square4" fun={() => selected("Square4")}/> <Square id = "Square5" fun={() => selected("Square5")}/> <Square id = "Square6" fun={() => selected("Square6")}/>
    </div>
    <div>
    <Square id = "Square7" fun={() => selected("Square7")}/> <Square id = "Square8" fun={() => selected("Square8")}/> <Square id = "Square9" fun={() => selected("Square9")}/>
    </div>
    </>

)
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Board/>);
// -----------------------------------------------
