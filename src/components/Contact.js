import React, { useState } from 'react'

export default function Contact() {

    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [mess, setMess] = useState('');
    const [errMess, setErrMess] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }

    const initialize = () => {
        setEmail('')
        setDesc('')
        setTitle('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch('http://localhost:3001/api/notes/createNote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    title: title,
                    description: desc
                })
            })
            let data = await res.json();
            setErrMess('')
            setMess('Message sent successfully')
            initialize()
        } catch (err) {
            setMess('')
            setErrMess('An error occurred')
        }
    }

    return (
        <div id="contact">
            <hr className=' myline'></hr>
            <div className='container my-5 contact-div'>
                <h1 className='text-center mb-4 myhead-5'>Have Questions?</h1>
                <p className='text-center fw-bold mb-4'>Write your queries and I'll get back to you within 24 hours</p>
                <form onSubmit={handleSubmit}>
                    {(mess.length !== 0) && <div className="alert alert-success my-3 text-center fw-bold" role="alert">
                        {mess}
                    </div>}
                    {(errMess.length !== 0) && <div className="alert alert-danger my-3 text-center fw-bold" role="alert">
                        {errMess}
                    </div>}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" value={email} onChange={handleEmailChange} className="form-control" id="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Enter your question</label>
                        <input type="text" value={title} onChange={handleTitleChange} className="form-control" id="exampleFormControlInput1" placeholder="Write your queries here" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" onChange={handleDescChange} value={desc} id="exampleFormControlTextarea1" placeholder='describe your question' rows="3" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-success my-3 d-block mx-auto">Submit</button>
                </form>
            </div>
        </div>
    )
}
