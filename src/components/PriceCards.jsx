import React from 'react'

function PriceCards() {
  return (
    <>
    <div className="pricing-table-area section-space--pb_70 bg-gradient">
                <div className="pricing-table-title-area position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-wrapper text-center section-space--mb_60 wow move-up">
                                    <h6 className="section-sub-title mb-20">Pricing and plan</h6>
                                    <h3 className="section-title">20% discount for <span className="text-color-primary">any the plan.</span> </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing-table-content-area">
                    <div className="container">
                        <div className="row pricing-table-one">
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table wow move-up">
                                <div className="pricing-table__inner">
                                    <div className="pricing-table__header">
                                        <h6 className="sub-title">Basic</h6>
                                        <div className="pricing-table__image">
                                            <img src="images/icons/mitech-pricing-box-icon-01-90x90.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="pricing-table__price-wrap">
                                            <h6 className="currency">$</h6>
                                            <h6 className="price">19</h6>
                                            <h6 className="period">/mo</h6>
                                        </div>
                                    </div>
                                    <div className="pricing-table__body">
                                        <div className="pricing-table__footer">
                                            <a href="#/" className="ht-btn ht-btn-md ht-btn--outline">Get started</a>
                                        </div>
                                        <ul className="pricing-table__list text-left">
                                            <li> Free Breakfast</li>
                                            <li>2 Extra days &amp; of touring</li>
                                            <li><span className="featured">Free Airport pickup</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table pricing-table--popular wow move-up">
                                <div className="pricing-table__inner">
                                    <div className="pricing-table__feature-mark">
                                        <span>Popular Choice</span>
                                    </div>
                                    <div className="pricing-table__header">
                                        <h6 className="sub-title">Professional</h6>
                                        <div className="pricing-table__image">
                                            <img src="images/icons/mitech-pricing-box-icon-02-88x88.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="pricing-table__price-wrap">
                                            <h6 className="currency">$</h6>
                                            <h6 className="price">59</h6>
                                            <h6 className="period">/mo</h6>
                                        </div>
                                    </div>
                                    <div className="pricing-table__body">
                                        <div className="pricing-table__footer">
                                            <a href="#/" className="ht-btn  ht-btn-md ">Get started</a>
                                        </div>
                                        <ul className="pricing-table__list text-left">
                                            <li>Free Airport pickups</li>
                                            <li>Free gym and yoga classes</li>
                                            <li>20% discount &amp; on any hotel you choose </li>
                                            <li>4 extra days of touring </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table wow move-up">
                                <div className="pricing-table__inner">
                                    <div className="pricing-table__header">
                                        <h6 className="sub-title">Grand</h6>
                                        <div className="pricing-table__image">
                                            <img src="images/icons/mitech-pricing-box-icon-03-90x90.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="pricing-table__price-wrap">
                                            <h6 className="currency">$</h6>
                                            <h6 className="price">29</h6>
                                            <h6 className="period">/mo</h6>
                                        </div>
                                    </div>
                                    <div className="pricing-table__body">
                                        <div className="pricing-table__footer">
                                            <a href="#/" className="ht-btn ht-btn-md ht-btn--outline">Get started</a>
                                        </div>
                                        <ul className="pricing-table__list text-left">
                                            <li>Free meals</li>
                                            <li>Free hotels </li>
                                            <li>Quality &amp; Customer Experience </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    </>
  );
};

export default  PriceCards;