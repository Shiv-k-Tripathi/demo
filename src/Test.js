import React, { useEffect, useState } from 'react'

const Test = () => {
    const [data, setData] = useState([]);
    useEffect(async () => {
        const data =await  fetch('https://thronesapi.com/api/v2/Characters');
        const getData = await data.json();
        console.log(getData);
        setData(getData)
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {data.map(({fullName,id,title}) => {
                        return <div className='col-lg-4' key={id}>
                            <h1>Name : {fullName}</h1>
                            <h1>Name : {title}</h1>
                        </div> 
                    })}
                </div>
            </div>
        </>
    )
}

export default Test;