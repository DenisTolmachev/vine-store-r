import React from 'react';
import consult from '../img/consult.png';
import natur_product from '../img/natur-product.png';
import cup from '../img/cup.png';
import persent from '../img/persent.png';

const Work_us = () => (
        <div className="work-us-block">
            <div className="work-us-title">
                <p>работая с нами вы получаете:</p>
            </div>
            <div className="work-us-info">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="consult-block">
                            <img src={consult} alt=""/>
                            <h1>бесплатная консультация</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mi nec justo
                                vestibulum auctor. Phasellus sollicitudin diam at feugiat dictum. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="natur-product-block">
                            <img src={natur_product} alt=""/>
                            <h1>100% натуральный продукт</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mi nec justo
                                vestibulum auctor. Phasellus sollicitudin diam at feugiat dictum. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="cup-block">
                            <img src={cup} alt=""/>
                            <h1 className="outborder">победитель международных выставок</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mi nec justo
                                vestibulum auctor. Phasellus sollicitudin diam at feugiat dictum. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="persent-block">
                            <img src={persent} alt=""/>
                            <h1>скидка<br/>на покупку</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mi nec justo vestibulum auctor. Phasellus sollicitudin diam at feugiat dictum. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

export default Work_us;