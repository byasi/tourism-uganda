import React from 'react'
import Banner from '../../components/Banner';
import BookingForm from '../../components/Booking';
import BrandLogo from '../../components/brandlogo';
import PriceCards from '../../components/PriceCards';
import Services from '../../components/Services';
import SpecialRecognition from '../../components/SpecialRecognition';

function Home () {
  return (
    <>
 
    <div className="site-wrapper-reveal section-space--pt__120">
            <Banner />
            {/* <!--===========  feature-images-wrapper  Start =============--> */}
            <div className="feature-images-wrapper position-relative">
                <div className="grid-wrapper">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                    <div className="line line-4"></div>
                </div>
                <div className="swiper-container service-slider__container">
                    <div className="swiper-wrapper service-slider__wrapper feature-images__three">
                        <div className="swiper-slide">
                            {/* <!-- ht-box-icon Start --> */}
                            <a href="#/" className="ht-box-images style-03 wow move-up">
                                <div className="image-box-wrap">
                                    <div className="box-image">
                                        <img className="img-fulid" src="images/icons/mitech-processing-service-image-01-80x83.webp" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="heading">Tight Security </h5>
                                        <div className="text">Our country is secure &amp; we also ensure that our tourists are safe.</div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- ht-box-icon End --> */}
                        </div>
                        <div className="swiper-slide">
                            {/* <!-- ht-box-icon Start --> */}
                            <a href="#/" className="ht-box-images style-03 wow move-up">
                                <div className="image-box-wrap">
                                    <div className="box-image">
                                        <img className="img-fulid" src="images/icons/mitech-processing-service-image-02-80x83.webp" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="heading">Infrastructure Plan</h5>
                                        <div className="text">Uganda Zzabu takes into account all conditions and budgets needed for building infrastructure plan.</div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- ht-box-icon End --> */}
                        </div>
                        <div className="swiper-slide">
                            {/* <!-- ht-box-icon Start --> */}
                            <a href="#/" className="ht-box-images style-03 wow move-up">
                                <div className="image-box-wrap">
                                    <div className="box-image">
                                        <img className="img-fulid" src="images/icons/mitech-processing-service-image-03-80x83.webp" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="heading">Tight Security</h5>
                                        <div className="text">Our country is secure &amp; we also ensure that our tourists are safe..</div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- ht-box-icon End --> */}
                        </div>
                        <div className="swiper-slide">
                            {/* <!-- ht-box-icon Start --> */}
                            <a href="#/" className="ht-box-images style-03 wow move-up">
                                <div className="image-box-wrap">
                                    <div className="box-image">
                                        <img className="img-fulid" src="images/icons/mitech-processing-service-image-04-80x83.webp" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="heading">Climate</h5>
                                        <div className="text">Assured, Uganda has the best climate and weather in the East Africa and you would want to prove this.</div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- ht-box-icon End --> */}
                        </div>
                        <div className="swiper-slide">
                            {/* <!-- ht-box-icon Start --> */}
                            <a href="#/" className="ht-box-images style-03 wow move-up">
                                <div className="image-box-wrap">
                                    <div className="box-image">
                                        <img className="img-fulid" src="images/icons/mitech-processing-service-image-05-80x83.webp" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="heading">Hospitality</h5>
                                        <div className="text">Uganda is very hospital and very friendly. It comprises of many local languages but the official language is English</div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- ht-box-icon End --> */}
                        </div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-service section-space--mt_30"></div>
                </div>
            </div>
            {/* <!--===========  feature-images-wrapper  End =============--> */}




            {/* <!--===========  Our Company History Start =============--> */}

            <div className="our-company-history section-space--ptb_100">
                <div className="container-fluid">
                    <div className="grid-wrapper">
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                        <div className="line line-4"></div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-custom-col">
                                <div className="section-title-wrap">
                                    <h6 className="section-sub-title mb-20">Our company</h6>
                                    <h3 className="heading">We’ve been triumphing <br/> all these <span className="text-color-primary"> 38 years.</span> <br/> Sacrifices are made up <br/> with success.</h3>

                                    <p className="text mt-30">Uganda Zzabu takes into consideration every little detail to make sure that your stay here and tour runs smoothly. Uganda Zzabu highly values your money and we give what is supposed to offered
                                    in your money.</p>

                                    <div className="inner-button-box section-space--mt_60">
                                        <a href="/aboutus" className="ht-btn ht-btn-md">More About Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="rv-video-section">

                                <div className="ht-banner-01 ">
                                    <img className="img-fluid border-radus-5 animation_images one wow fadeInDown" src="images/tourism/greenforest.jpg" alt="" style={{width:'250px',height:'190px'}}/>
                                </div>

                                <div className="ht-banner-02">
                                    <img className="img-fluid border-radus-5 animation_images two wow fadeInDown" src="images/tourism/woman.jpg" alt="" style={{width:'188px',height:'115px'}}/>
                                </div>

                                <div className="main-video-box video-popup">
                                    <a href="#/" className="video-link  mt-30">
                                        <div className="single-popup-wrap">
                                            <img className="img-fluid border-radus-5" src="images/tourism/culturaldance.jpg" alt="" style={{width:'1140px',height:'400px'}}/>
                                            <div className="ht-popup-video video-button">
                                                <div className="video-mark">
                                                    <div className="wave-pulse wave-pulse-1"></div>
                                                    <div className="wave-pulse wave-pulse-2"></div>
                                                </div>
                                                <div className="video-button__two">
                                                    <div className="video-play">
                                                        <span className="video-play-icon"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="ht-banner-03">
                                    <img className="img-fluid border-radus-5 animation_images three wow fadeInDown" src="images/tourism/chimpaze.jpg" alt="" style={{width:'188px',height:'115px'}}/>
                                </div>

                                <div className="ht-banner-04">
                                    <img className="img-fluid border-radus-5 animation_images four wow fadeInDown" src="images/tourism/gorilla.jpg" alt="" style={{width:'190px',height:'190px'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--===========  Our Company History Start  End =============--> */}
            <Services />
            <div className="service-projects-wrapper section-space--ptb_100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-wrap text-center section-space--mb_60">
                                <h6 className="section-sub-title mb-20">Most Visited</h6>
                                <h3 className="heading">The most visited places <span className="text-color-primary">on top all times</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="latest-news-wrap">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-blog-lg-item wow move-up">
                                    {/* <!-- Post Feature Start --> */}
                                    <a href="blog-post-layout-one.html">
                                        <div className="post-blog-thumbnail">
                                            <img className="img-fluid" src="images/tourism/chimpaze.jpg" height='2px' alt="tourist Images"/>
                                        </div>
                                    </a>
                                    {/* <!-- Post Feature End --> */}

                                    {/* <!-- Post info Start --> */}
                                    <div className="post-info lg-blog-post-info mt-20">
                                        <h4 className="post-title">
                                            <a href='#/'>Bwindi Impenetratable Forest</a>
                                        </h4>
                                        <p>Commonly known for mountain gorillas and chimpanzes</p>
                                    </div>
                                    {/* <!-- Post info End --> */}
                                </div>
                            </div>
                            <div className="col-lg-6 blog-list-service">
                                <div className="single-blog-lg-list wow move-up">
                                    {/* <!-- Post Feature Start --> */}
                                    <a href="blog-post-layout-one.html">
                                        <div className="post-blog-thumbnail">
                                            <img className="img-fluid" src="images/tourism/zebra.jpg" alt="Blog Images"/>
                                            
                                        </div>
                                    </a>
                                    {/* <!-- Post Feature End --> */}

                                    {/* <!-- Post info Start --> */}
                                    <div className="post-info lg-blog-post-info">
                                      
                                        <h5 className="post-title">
                                            <a href="#/">The Dry glasslands of Savannah</a>
                                        </h5>
                                        <p>A visit to the Savannah grasslands will work for you perfectly in this season</p>
                                    </div>
                                    {/* <!-- Post info End --> */}
                                </div>
                                <div className="single-blog-lg-list wow move-up">
                                    {/* <!-- Post Feature Start --> */}
                                    <a href="blog-post-layout-one.html">
                                        <div className="post-blog-thumbnail">
                                            <img className="img-fluid" src="images/tourism/elephant2.jpg" alt="Blog Images"/>
                                            
                                        </div>
                                    </a>
                                    {/* <!-- Post Feature End --> */}

                                    {/* <!-- Post info Start --> */}
                                    <div className="post-info lg-blog-post-info">
                                        <h5 className="post-title">
                                            <a href="#/">Tourist Site</a>
                                        </h5>
                                        <p>Elephants the giants of the jungle. Come see the biggest African Elephants</p>
                                    </div>
                                    {/* <!-- Post info End --> */}
                                </div>
                                <div className="single-blog-lg-list wow move-up">
                                    {/* <!-- Post Feature Start --> */}
                                    <a href="blog-post-layout-one.html">
                                        <div className="post-blog-thumbnail">
                                            <img className="img-fluid" src="images/tourism/hippos.jpg" alt="Blog Images"/>
                                            
                                        </div>
                                    </a>
                                    {/* <!-- Post Feature End --> */}

                                    {/* <!-- Post info Start --> */}
                                    <div className="post-info lg-blog-post-info">
                                        <h5 className="post-title">
                                            <a href="#/">Murchision Falls</a>
                                        </h5>
                                        <p>Well known for hippos and crocodiles</p>
                                    </div>
                                    {/* <!-- Post info End --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* <!--========== Call to Action Area Start ============--> */}
             <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-7">
                            <div className="cta-content md-text-center">
                                <h3 className="heading text-white">We do everthing possible to make your trip a <span className="text-color-secondary"> success</span></h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="cta-button-group--one text-center">
                                <a href="#/" className="btn btn--white btn-one"><span className="btn-icon me-2"><i className="fab fa-telegram"></i></span> Let's talk</a>
                                <a href="#/" className="btn btn--secondary  btn-two"><span className="btn-icon me-2"><i className="fab fa-arrow"></i></span> Get info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--========== Call to Action Area End ============--> */}
           
            {/* <!--====================  Steps process area ====================--> */}
            <div className="gradation-process-area section-space--ptb_100">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gradation-title-wrapper section-space--mb_60">
                                <div className="gradation-title-wrap ">
                                    <h6 className="section-sub-title text-black mb-20">How Uganda Zzabu works</h6>
                                    <h4 className="heading">How it helps <span className="text-color-primary">your <br/> tour succeed</span></h4>
                                </div>


                                <div className="gradation-sub-heading">
                                    <h3 className="heading"><mark>04</mark> Steps</h3>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ht-gradation style-01">
                                {/* <!-- Single item gradation Start --> */}
                                <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.1s">
                                    <div className="line"></div>
                                    <div className="circle-wrap">
                                        <div className="mask">
                                            <div className="wave-pulse wave-pulse-1"></div>
                                            <div className="wave-pulse wave-pulse-2"></div>
                                            <div className="wave-pulse wave-pulse-3"></div>
                                        </div>

                                        <h6 className="circle">1</h6>
                                    </div>

                                    <div className="content-wrap">

                                        <h6 className="heading">01. Book a trip</h6>

                                        <div className="text">First book a trip with us with a plan of your choice.</div>
                                    </div>
                                </div>
                                {/* <!-- Single item gradation End --> */}

                                {/* <!-- Single item gradation Start --> */}
                                <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.15s">
                                    <div className="line"></div>
                                    <div className="circle-wrap">
                                        <div className="mask">
                                            <div className="wave-pulse wave-pulse-1"></div>
                                            <div className="wave-pulse wave-pulse-2"></div>
                                            <div className="wave-pulse wave-pulse-3"></div>
                                        </div>

                                        <h6 className="circle">2</h6>
                                    </div>

                                    <div className="content-wrap">

                                        <h6 className="heading">02. Pickup &amp; Transport</h6>

                                        <div className="text">We will pick you up from your respective points of meeting to your destination</div>
                                    </div>
                                </div>
                                {/* <!-- Single item gradation End --> */}

                                {/* <!-- Single item gradation Start --> */}
                                <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.20s">
                                    <div className="line"></div>
                                    <div className="circle-wrap">
                                        <div className="mask">
                                            <div className="wave-pulse wave-pulse-1"></div>
                                            <div className="wave-pulse wave-pulse-2"></div>
                                            <div className="wave-pulse wave-pulse-3"></div>
                                        </div>

                                        <h6 className="circle">3</h6>
                                    </div>

                                    <div className="content-wrap">

                                        <h6 className="heading">03. Rules &amp; Guidlines</h6>

                                        <div className="text">After agreeing on the ideas and plans, we will conduct as scheduled and give rules &amp; guidlines about your tour.</div>
                                    </div>
                                </div>
                                {/* <!-- Single item gradation End --> */}

                                {/* <!-- Single item gradation Start --> */}
                                <div className="item item-1 animate wow fadeInRight" data-wow-delay="0.25s">
                                    <div className="line"></div>
                                    <div className="circle-wrap">
                                        <div className="mask">
                                            <div className="wave-pulse wave-pulse-1"></div>
                                            <div className="wave-pulse wave-pulse-2"></div>
                                            <div className="wave-pulse wave-pulse-3"></div>
                                        </div>

                                        <h6 className="circle">4</h6>
                                    </div>

                                    <div className="content-wrap">

                                        <h6 className="heading">04. Successfull &amp; Nice Trip</h6>

                                        <div className="text">Once the final plan is approved, everything will be conducted according to the agreed terms and conditions and you will enjoy your trip.</div>
                                    </div>
                                </div>
                                {/* <!-- Single item gradation End --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--====================  End of gradation process area  ====================--> */}

           
            <SpecialRecognition />
            <PriceCards />
            {/* <!--=========== Service Projects Wrapper Start =============--> */}
            
    <BookingForm />
    <BrandLogo />
    </div>
    </>
  )
}

export default Home;
