import { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>("Value is Zero");
    const [isZero, setIsZero] = useState<boolean>(true);

    const increment = () => {
        setCount(prevCount => {
            const newCount = prevCount + 1;
            setName(newCount > 0 ? "Value is Positive" : newCount < 0 ? "Value is Negative" : "Value is Zero");
            setIsZero(newCount === 0);
            return newCount;
        });
    };

    const decrement = () => {
        setCount(prevCount => {
            const newCount = prevCount - 1;
            setName(newCount > 0 ? "Value is Positive" : newCount < 0 ? "Value is Negative" : "Value is Zero");
            setIsZero(newCount === 0);
            return newCount;
        });
    };

    return (
        <>
            <h2>UseState :</h2>
            <p style={{ fontSize: "20px", color: "blue" }}>{count}</p>
            <p style={{ fontSize: "20px", color: "blue" }}>{name}</p>
            <p style={{ fontSize: "20px", color: "blue" }}>{isZero ? "Number is ZERO" : "Number is NOT ZERO"}</p>
            <button onClick={increment}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={decrement}>Decrement</button>
        </>
    );
};

export default UseState;