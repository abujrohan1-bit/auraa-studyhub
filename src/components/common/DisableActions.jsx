import { useEffect } from "react";

export default function DisableActions() {

useEffect(()=>{

const handleKey=(e)=>{

if(

e.ctrlKey &&

(

e.key==="s" ||

e.key==="u" ||

e.key==="c" ||

e.key==="p"

)

){

e.preventDefault();

}

};

const handleRightClick=(e)=>{

e.preventDefault();

};

document.addEventListener(
"keydown",
handleKey
);

document.addEventListener(
"contextmenu",
handleRightClick
);

return ()=>{

document.removeEventListener(
"keydown",
handleKey
);

document.removeEventListener(
"contextmenu",
handleRightClick
);

};

},[]);

return null;

}