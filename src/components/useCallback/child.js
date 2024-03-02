import React, { memo } from "react";


function Child(props) {
    console.log("Rerender");
    return (
        <div>
            <p>
                Counter: {props.childcounter}
            </p>
                <button onClick={props.childInc}>Child Increment</button>
        </div>
    )
}

export default memo(Child);


//lazy loading
//redux - flow.