// Styles and libs
import './App.scss';
import React from 'react';
//Import components
import Header from './components/Header';
import BookingModal from './components/BookingModal'; // Import the modal component
//Import images
import HeroImg from './assets/img/img-bloubergstrand_wza.jpg';
import BruceImg from './assets/img/img-bruce.jpg';
import GarronImg from './assets/img/img-garron.jpg';
import HydenImg from './assets/img/img-hyden.jpg';
import KitesurfIcon from './assets/img/icon-kitesurfing.svg';
import WetsuitIcon from './assets/img/icon-wetsuit.svg';
import HelmetIcon from './assets/img/icon-helmet.svg';
import PrivateImg from './assets/img/img-private.jpg';
import SemiprivateImg from './assets/img/img-semiprivate.jpg';

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

  return (
    <div className='dp-wrapper'>
        <Header />
        <div className='dp-content'>
            <div className='dp-page'>
                <section className='dp-hero-layout' id="hero">
                    <div className='intro-text column-start'>
                        <h1 className='title'>Cape Town's oldest Kite School</h1>
                        <p className='subtitle'>established in 2006</p>
                        <p className='paragraph'>Kitesurf lessons take place daily</p>
                        <button className='btn-color' onClick={openModal}>
                            <p>Book a lesson</p>
                        </button>
                        <button className='btn-border'>
                            <a href='#contact'>Contact info</a>
                        </button>
                    </div>
                    <div className='img-container'>
                        <img className='img' src={HeroImg} alt=''/>
                    </div>
                </section>
                <hr/>
                <section className='dp-cards-layout' id='team'>
                    <div className='text-container'>
                        <h3 className='title'>Meet Our Expert Instructors.</h3>
                        <p className='paragraph'>Our team is comprised of highly skilled and passionate kiteboarding instructors dedicated to providing you with an exceptional learning experience. From seasoned veterans to rising stars, each member brings a unique blend of expertise and enthusiasm to help you achieve your kiteboarding goals.</p>
                    </div>
                    <div className='card-container'>
                        <div className='card'>
                            <div className='img-container'>
                                <img className='img' src={BruceImg} alt=''/>
                            </div>
                            <div className='text-container'>
                                <p className='subtitle'>Bruce Gonlag</p>
                                <p className='paragraph'>Bruce is one of the oldest kiteboarding instructors around and a absolute legend in the Cape Town kiteboarding community. Respected everywhere for both his experience in kiting and teaching, many a pro had their humble beginnings under Bruce’s tutelage. Patient, insightful and experience, Bruce gets even the most challenging students up and riding.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='img-container'>
                                <img className='img' src={GarronImg} alt=''/>
                            </div>
                            <div className='text-container'>
                                <p className='subtitle'>Garron Gonsalves</p>
                                <p className='paragraph'>Garron has been under Bruce’s wing for a 2 years now. Sucking up all that Bruce has to offer as a legendary kiteboarding teacher, it is no surprise that Garron is asked for by name and gets top ratings. Beginners and intermediate students are his passion but he loves getting new people up and riding!</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='img-container'>
                                <img className='img' src={HydenImg} alt=''/>
                            </div>
                            <div className='text-container'>
                                <p className='subtitle'>Hyden Jonas</p>
                                <p className='paragraph'>This ex-superbike racer has very little fear but is extremely calculated. His high risk maneuvers are planned and executed carefully. If you are looking to take you kiting to the next level safely then Hayden is your man. No gung-ho, do or die attitudes here! High risk maneuvers like mega-loops, board-offs are awesome but can take a long time to perfect. Get your jump-start here!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr/>
                <section className='dp-cards-layout' id='lessons'>
                    <div className='text-container'>
                        <h3 className='title'>Kitesurf lessons. What's included.</h3>
                        <p className='paragraph'>Our comprehensive kitesurfing lessons ensure you have everything you need to learn safely and effectively. We provide top-quality equipment and expert instruction, allowing you to focus on mastering the sport. Whether you're a complete beginner or looking to refine your skills, we've got you covered.</p>
                        <p className='paragraph'>All equipment is supplied. You will need sunscreen and sunglasses and a cap is recommended.</p>
                    </div>
                    <div className='card-container icon'>
                        <div className='card'>
                            <div className='img-container'>
                                <img className='img' src={KitesurfIcon} alt='Kite gear icon'/>
                            </div>
                            <div className='text-container'>
                                <p className='subtitle'>Kite gear</p>
                                <p className='paragraph'>We supply the latest and safest kiteboarding equipment, including kites, boards, and control bars. Our gear is regularly maintained and updated to provide you with the best possible learning experience.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='img-container'>
                                <img className='img' src={WetsuitIcon} alt='Wetsuit icon'/>
                            </div>
                            <div className='text-container'>
                                <p className='subtitle'>Wetsuit</p>
                                <p className='paragraph'>Stay comfortable and protected in the water with our high-quality wetsuits. We offer a range of sizes to ensure a proper fit, allowing you to focus on your lesson without worrying about the elements.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='img-container'>
                                <img className='img' src={HelmetIcon} alt='Helmet icon'/>
                            </div>
                            <div className='text-container'>
                                <p className='subtitle'>Helmet</p>
                                <p className='paragraph'>Your safety is our priority. We provide helmets for all students to ensure maximum protection during your lessons. Learn with confidence knowing you're well-protected.</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-container'>
                        <button className='btn' onClick={openModal}>
                            <p>How to book a lesson</p>
                        </button>
                    </div>
                </section>
                <hr/>
                <section className='dp-pricelist' id='prices'>
                    <div className='text-container'>
                        <h3 className='title'>Kitesurfing Lessons: Invest in Your Skills.</h3>
                        <p className='paragraph'>Our kitesurfing lesson packages are designed to get you up and riding with confidence. We offer both private and semi-private lessons, catering to your individual learning preferences and budget.  All equipment is included - just bring your sunscreen, sunglasses, and a hat!</p>
                    </div>
                    <div className='cards-container'>
                        <div className='card'>
                            <img className='img' src={PrivateImg} alt=''/>
                            <div className='text-container'>
                                <p className='subtitle'>Private lesson</p>
                                <p className='paragraph'>1 instructor/student</p>
                                <br/>
                                <div className='item'>
                                    <p className='paragraph'>3 HOURS SESSION</p>
                                    <p className='paragraph'>R4200</p>
                                </div>
                                <div className='item'>
                                    <p className='paragraph'>6 HOURS SESSION</p>
                                    <p className='paragraph'>R8400</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='img' src={SemiprivateImg} alt=''/>
                            <div className='text-container'>
                                <p className='subtitle'>Semi-Private lesson</p>
                                <p className='paragraph'>1 instructor max 2 students</p>
                                <br/>
                                <div className='item'>
                                    <p className='paragraph'>3 HOURS SESSION</p>
                                    <p className='paragraph'>R2250</p>
                                </div>
                                <div className='item'>
                                    <p className='paragraph'>6 HOURS SESSION</p>
                                    <p className='paragraph'>R4200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr/>
                <section className='dp-basic-text' id='rentals'>
                    <div className='text-container'>
                        <h3 className='title'>Gear Up and Ride: Kitesurf Rentals.</h3>
                        <p className='paragraph'>Already know how to kitesurf?  We offer top-quality kitesurfing equipment for rent, so you can hit the water with confidence. Our rental selection includes the latest kites, boards, harnesses, and wetsuits to suit your skill level and riding style.</p>
                    </div>
                    <div className='text-container'>
                        <button className='btn' onClick={openModal}>
                            <p>How to rent</p>
                        </button>
                    </div>
                </section>
                <hr/>
                <section className='dp-contact-layout' id='contact'>
                    <div className='text-container'>
                        <h3 className='title'>Get in Touch! Let's Ride Together in Cape Town.</h3>
                        <p className='paragraph'>Ready to book a lesson, rent gear, or just have a chat about kitesurfing in Cape Town? We're here to help! Reach out to us using your preferred method: WhatsApp, Instagram, email, or a phone call.</p>
                    </div>
                    <div className='contact-container'>
                        <div className='maps-wrapper-container'>
                            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414.3240599581816!2d18.4774221!3d-33.8228282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5f81202020cd%3A0xd66f921658f47f85!2sKiteboarding%20Cape%20Town%20School%20AIRUSH%20AK%20FREEWING%20STORE!5e0!3m2!1ses!2sde!4v1741623684567!5m2!1ses!2sde' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>
                        </div>
                        <div className='contact-info-container'>
                            <p className='subtitle'>Contact Information</p>
                            <div>
                                <p className='label'>Contact person:</p>
                                <p className='paragraph'>Bruce Gonlag</p>
                            </div>
                            <div>
                                <p className='label'>Address:</p>
                                <p className='paragraph'>Airush Shop 1 Portico Building<br/>Corner Athens Road and Table View Beachfront,<br/>Table View, Cape Town<br/>7441</p>
                            </div>
                            <div>
                                <p className='label'>Phone number:</p>
                                <p className='paragraph'><a href='tel:+27765916069'>+27 (0)76 591 6069</a></p>
                            </div>
                            <div>
                                <p className='label'>E-Mail:</p>
                                <p className='paragraph'><a href='mailto:bestkitebruce@gmail.com'>bestkitebruce@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <BookingModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>
    </div>
  )
}

export default App;