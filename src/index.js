import { useState } from 'react';
import { createRoot } from 'react-dom/client';


function Square(value){
    const [selction, setSelection] = useState(value)
    
    return (
    <button>{selction}</button>

)}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Square/>);
// -----------------------------------------------
