import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './icon.css'
import { MdFeaturedPlayList } from "react-icons/md";
import { IoLayersOutline } from "react-icons/io5";
import { LuTerminalSquare } from "react-icons/lu";
import { BsLayers } from "react-icons/bs";
function Icon() {
    return (
        <div>
            <section id='cont' className="features-icons bg-light text-center">
                <div className="container">
                    <div id='main' className="row">
                        <div id='co' className="col-lg-4 ">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3" >
                                <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"><MdFeaturedPlayList size={120} /></i></div>
                                <h3>Fully Responsive</h3>
                                <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                            </div>
                        </div>
                        <div id='co' className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className="bi-layers m-auto text-primary"><BsLayers size={120} /></i></div>
                                <h3>Bootstrap 5 Ready</h3>
                                <p className="lead mb-0">Featuring the latest build of the new Bootstrap 5 framework!</p>
                            </div>
                        </div>
                        <div id='co' className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className="bi-terminal m-auto text-primary"><LuTerminalSquare size={120} /></i></div>
                                <h3>Easy to Use</h3>
                                <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Icon
