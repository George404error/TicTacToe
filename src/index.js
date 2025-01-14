import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css"

function Square({Value, fun}){
    
    return (
    <button onClick={fun}>{Value}</button>

)}
function Board(){
    const [turn, setTurn] = useState(0)
    const [grid, setGrid] = useState(Array(9).fill(null))
    
    function calculateWinner(board){
        //grid is a single dimension array just to keep it simple
         // array of all the possible wins
         const lines = [
             [0, 1, 2],
             [3, 4, 5],
             [6, 7, 8],
             [0, 3, 6],
             [1, 4, 7],
             [2, 5, 8],
             [0, 4, 8],
             [2, 4, 6],
           ];
           //goes over all the vitorcy conditons
           for (let i =0; i< lines.length; i++ ){
           //get the array place need to test for a win
             const [a,b,c] = lines[i]
             //grid (a) as they are all false and i change the value to x or o when in use which is what it compred 
             if(board[a] && board[a] == board[b] && board[b] == board[c]){
                 //true being there is a winner
                 return true
             }
           }
           //being there is no winner yet
     return false
         }

         function updateSquare(place){
   //stops continung if game won or click on a place already done
    if(calculateWinner(grid)|| grid[place]){
        return
    }
    //if bascially means you cant change what someone has already done
 
const newGrid = [...grid]
newGrid[place] = turn % 2 == 0? "x":"0"
    setGrid(newGrid)
    setTurn((turn + 1) %2)

}
return(
    <>
   <div className="Row">
    <Square Value = {grid[0]} fun ={()=>updateSquare(0)}/>
    <Square Value = {grid[1]} fun ={()=>updateSquare(1)}/>
    <Square Value = {grid[2]} fun ={()=>updateSquare(2)}/>
   </div>
   <div className="Row">
    <Square Value = {grid[3]} fun ={()=>updateSquare(3)}/>
    <Square Value = {grid[4]} fun ={()=>updateSquare(4)}/>
    <Square Value = {grid[5]} fun ={()=>updateSquare(5)}/>
   </div>
   <div className="Row">
    <Square Value = {grid[6]} fun ={()=>updateSquare(6)}/>
    <Square Value = {grid[7]} fun ={()=>updateSquare(7)}/>
    <Square Value = {grid[8]} fun ={()=>updateSquare(8)}/>
   </div>
    </>

)
}
function Game(){
return (
    <Board/>
)

}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Game/>);
// -----------------------------------------------