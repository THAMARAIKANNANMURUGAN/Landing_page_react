import React from 'react'
import './mather.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import head from '../image/one.jpg'

function Mather() {
    return (
        <>
            < Image className='image' src={head} fluid></Image>
            <header className='headbody'>
                <div className="body">
                    <div className="ele">
                        <div className="co-1">
                            <h1>Generate more leads with a <br /> professional landing page!</h1>
                        </div>
                        <div className="co-2">
                            <div className="input_data">
                                <input class="form-control form-control-lg py-3" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" data-sb-can-submit="no" />
                            </div>
                            <div className="button">
                                <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Mather
