import { useMemo, useState } from "react";

function Usememo() {
    const [counter, setCounter] = useState(0);
    const [ show, setShow ] = useState(false)


    const ConditionInc = (num) => {
        console.log("increment",num)
        for (let i = 0; i < 200000000000000; i++) {
            return num;
        }
    }

    const conditionInc = useMemo(() => {
        return ConditionInc(counter);
    },[counter])


     


    return (
        <div>
            <button onClick={() => setCounter(counter+1)}>Increment</button>
            <p>Cunter: {conditionInc}</p>

            <button onClick={() => setShow(!show)}>{show ? 'Clicked': 'click Here' }</button>
        </div>
    )
}

export default Usememo;