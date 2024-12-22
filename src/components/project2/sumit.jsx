import React from 'react';

function Sumit(props) {
    const [firstName, setFirstName] = React.useState('');
    const [secondName, setSecondName] = React.useState('');
    const [sum, setSum] = React.useState(0);
    const sumit=()=>{
        return setSum(Number(firstName) + Number(secondName));
    }
    return (
        <>
            <h1>Sum it</h1>
<form className="flex flex-row gap-2 justify-center align-center ">
            <input type="text" value={firstName} placeholder={"Enter First Number"} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" value={secondName} placeholder={"Enter Second Number"} onChange={(e) => setSecondName(e.target.value)} />
</form>
<button onClick={sumit}> Sum It</button>
        <h1>{sum}</h1>
        </>
    );
}

export default Sumit;