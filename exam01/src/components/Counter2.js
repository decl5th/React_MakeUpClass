import React, {useState} from "react";

const Counter2 = () => {
    const [data, setData] = useState({
        number: 0,
        name: "이이름",
    });

    const {number, name } = data;

    const decrese = () => {
        setData({...data, number: number - 1});
    };

    const increse = () => {
        setData({...data, number: number + 1});
    };

    console.log("호출", data);

    return (
        <>
            <h1>{number}</h1>
            <h2>{name}</h2>
            <button type="button" onClick={decrese}>-1</button>
            <button type="button" onClick={increse}>+1</button>
        </>
    );
};

export default Counter2;