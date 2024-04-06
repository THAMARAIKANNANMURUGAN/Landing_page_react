import React from 'react'
import Image from 'react-bootstrap/Image';
import five from '../image/five.jpg'
import six from '../image/six.jpg'
import seven from '../image/seven.jpg'
import'./profile.css'



function Profile() {
    return (
        <>
            <section className="testimonials text-center bg-light">
                <div id='profile_cont' className="container">
                    <h2 className="mb-5">What people are saying...</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div id='testimo' className="testimonial-item mx-auto mb-Z mb-lg-0">
                                <Image id='image_size' className="img-fluid rounded-circle mb-3" src={five}></Image>
                                <h5>Margaret E.</h5>
                                <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div  id='testimo'  className="testimonial-item mx-auto mb-5 mb-lg-0">
                                <Image id='image_size'  className="img-fluid rounded-circle mb-3" src={six}></Image>
                                <h5>Fred S.</h5>
                                <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div   id='testimo' className="testimonial-item mx-auto mb-5 mb-lg-0">
                                <Image id='image_size'  className="img-fluid rounded-circle mb-3" src={seven}></Image>
                                <h5>Sarah W.</h5>
                                <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
