import React from 'react';
import Grapes1 from '../img/grapes1.png'
import Grapes2 from '../img/grapes2.png'
import Grapes3 from '../img/grapes3.png'

const Gallery_block = () => (
    <div className="gallery-block">
        <div className="gallery-block-title">
            <p>наши новинки</p>
        </div>
        <div className="gallery">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="grapes">
                        <a className="img-wrap" href={Grapes1}>
                            <img src={Grapes1} alt="Сфинкс"/>
                            <div className="img-title">
                                <p>Сфинкс</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="grapes">
                        <a className="img-wrap" href={Grapes2}>
                            <img src={Grapes2} alt="Велес"/>
                            <div className="img-title">
                                <p>Велес</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="grapes">
                        <a className="img-wrap" href={Grapes3}>
                            <img src={Grapes3} alt="Калиста"/>
                            <div className="img-title">
                                <p>Калиста</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="grapes">
                        <a className="img-wrap" href={Grapes1}>
                            <img src={Grapes1} alt="Сфинкс"/>
                            <div className="img-title">
                                <p>Сфинкс</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="grapes">
                        <a className="img-wrap" href={Grapes2}>
                            <img src={Grapes2} alt="Велес"/>
                            <div className="img-title">
                                <p>Велес</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="grapes">
                        <a className="img-wrap" href={Grapes3}>
                            <img src={Grapes3} alt="Калиста"/>
                            <div className="img-title">
                                <p>Калиста</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="show-all-button">
                    <button className="show-all" onclick="location.href = ''">смотреть все</button>
                </div>
            </div>
        </div>
    </div>
);

export default Gallery_block;