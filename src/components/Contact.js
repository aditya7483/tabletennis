import React from 'react'

export default function Contact() {
    return (
        <div id="contact">
            <hr className=' myline'></hr>
            <div className='container my-5 contact-div'>
                <h1 className='text-center mb-4 myhead-5'>Have Questions?</h1>
                <p className='text-center fw-bold mb-4'>Write your queries and I'll get back to you within 24 hours</p>
                <form>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Enter your question</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Write your queries here" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='describe your question' rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-success my-3 d-block mx-auto">Submit</button>
                </form>
            </div>
        </div>
    )
}
