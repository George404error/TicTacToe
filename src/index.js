import { useState } from 'react';
import { createRoot } from 'react-dom/client';


function Square(value){
    const [selction, setSelection] = useState(value)
    return (
    <button>X</button>

)}
function Board(){
return(
    <>
    <div>
    <Square/> <Square/> <Square/>
    </div>
    <div>
    <Square/> <Square/> <Square/>
    </div>
    <div>
    <Square/> <Square/> <Square/>
    </div>
    </>

)
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Board/>);
// -----------------------------------------------
