import React from 'react'

function BookingForm () {
  return (
    <>
     <div className="contact-us-area service-contact-bg section-space--ptb_100">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-4">
                            <div className="contact-info sytle-one service-contact text-left">

                                <div className="contact-info-title-wrap text-center">
                                    <h3 className="heading text-white mb-10">4.9/5.0</h3>
                                    <div className="ht-star-rating lg-style">
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <p className="sub-text">by 700+ customers for 3200+ clients</p>
                                </div>

                                <div className="contact-list-item">
                                    <a href="tel:0751870394" className="single-contact-list">
                                        <div className="content-wrap">
                                            <div className="content">
                                                <div className="icon">
                                                    <span className="fa fa-phone"></span>
                                                </div>
                                                <div className="main-content">
                                                    <h6 className="heading">Call for advice now!</h6>
                                                    <div className="text">0751 870394</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="mailto:solomonbyasi@gmail.com" className="single-contact-list">
                                        <div className="content-wrap">
                                            <div className="content">
                                                <div className="icon">
                                                    <span className="fab fa-google"></span>
                                                </div>
                                                <div className="main-content">
                                                    <h6 className="heading">Book now</h6>
                                                    <div className="text">booking@ugandazzabu.com</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-7 ms-auto">
                            <div className="contact-form-service-wrap">
                                <div className="contact-title text-center section-space--mb_40">
                                    <h3 className="mb-10">Book with us!!</h3>
                                    <p className="text">Reach out to the Uganda’s most reliable and enjoyable Tourist sites.</p>
                                </div>

                                <form className="contact-form" id="contact-form-2" method="">
                                    <div className="contact-form__two">
                                        <div className="contact-input">
                                            <div className="contact-inner">
                                                <input name="con_name" type="text" placeholder="Name *"/>
                                            </div>
                                            <div className="contact-inner">
                                                <input name="con_email" type="email" placeholder="Email *"/>
                                            </div>
                                        </div>
                                        <div className="contact-select">
                                            <div className="form-item contact-inner">
                                                <span className="inquiry">
                                        <select id="Visiting" name="Visiting">
                                            <option defaultValue="Select Department">Select the Pricing</option>
                                            <option value="Your inquiry about">Basic</option>
                                            <option value="General Information Request">Professional</option>
                                            <option value="Partner Relations">Grand</option>
                                           
                                        </select>

                                    </span>
                                            </div>
                                        </div>
                                        <div className="contact-inner contact-message">
                                            <textarea name="con_message" placeholder="Please describe what you need."></textarea>
                                        </div>
                                        <div className="comment-submit-btn">
                                            <button className="ht-btn ht-btn-md" type="submit">Send message</button>
                                            <p className="form-messege-2"></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </>
  );
};

export default BookingForm;