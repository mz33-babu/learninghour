import { useState} from "react";

const TestThree=()=>{
    const [textColor, setTextColor]=useState("green")

    function changeColorFn(){
        setTextColor("red")
        }

        function handleInputChange(event){
            setTextColor(event.target.value)
        }
    
    return (
        <div style={{color:textColor}}>
            <button onClick={changeColorFn}>
            Change color
            </button>
            {textColor}
            <input
                type="text" onChange={handleInputChange}>

            </input>
        </div>
    )
}
export default TestThree;