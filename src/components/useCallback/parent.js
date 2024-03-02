import React, { useCallback, useState } from "react";
import Child from "./child";

function Parent() {
    const [ counter, setCounter ] = useState(0);
    const [ childcounter, setChildCounter ] = useState(0)

    const handleInc = useCallback(() => {
        setChildCounter(childcounter+1);
    },[childcounter]);

   

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter+1)}>Increment</button>
            <Child childcounter={childcounter} childInc = {handleInc}/>

        </div>
    )
}

export default Parent;