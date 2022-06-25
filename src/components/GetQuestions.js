import React, { useState } from 'react'

export default function GetQuestions(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        console.log('inside on cliick')
        try {
            setLoading(true)
            let res = await fetch('http://localhost:3001/api/notes/getNotes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let data = await res.json();
            console.log(data)
            setData(data)
        } catch (err) {
            setData([]);
        }
        setLoading(false)
    }
    return (
        <div>
            <button className='btn btn-outline-success d-block mx-auto my-5' onClick={handleClick}>Get Queries</button>

            {!loading && <div className='container'>
                {data.map((ele) => {
                    return <div className='container my-4 border border-secondary' key={ele._id}>
                        <h5 className='my-4'>
                           title: {ele.title}
                        </h5>
                        <p className=' my-3'>
                            description: {ele.description}
                        </p>
                        <p className='my-3'>email : {ele.email}</p>
                    </div>
                })}
            </div>}
        </div>
    )
}
