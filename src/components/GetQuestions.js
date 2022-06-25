import React, { useState,useEffect} from 'react'

export default function GetQuestions(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [err, setErr] = useState('');

    const fetchData = async()=>{
        try {
            setLoading(true)
            let res = await fetch('https://tt-74.herokuapp.com/api/notes/getNotes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let data = await res.json();
            setData(data)
        } catch (err) {
            setData([]);
        }
    }


    useEffect(() => {
       if(data.length===0)
       {
        fetchData()
       }
       // eslint-disable-next-line
    }, []);


    // const handleDelete = async (id) => {

    //     try {
    //         let authToken = localStorage.getItem('auth-token')
    //         // eslint-disable-next-line
    //         let res = await fetch(`http://localhost:3001/api/notes/deleteNote/${id}`, {
    //             method: `DELETE`,
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'auth-token':authToken
    //             }
    //         })
    //         setData([])
    //     } catch (err) {
    //         setErr('An error occurred')
    //     }
    // }

    const handleClick =() => {
        fetchData()
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
                        {/* <button className='btn btn-outline-danger mb-3' onClick={()=>{handleDelete(ele._id)}}>Delete</button> */}
                    </div>
                })}
            </div>}
        </div>
    )
}
