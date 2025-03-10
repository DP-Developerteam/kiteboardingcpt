// Import styles and libraries
import './__components.scss';
import React from 'react';

const BookingModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="booking-modal-overlay">
            <div className="booking-modal">
                <div className="booking-modal-header">
                    <h2>Ready to Ride? Book Your Adventure!</h2>
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="booking-modal-content">
                    <p className='paragraph'>Dive into the thrill of kitesurfing! Whether you're chasing your first ride or gearing up for an epic session, we've got you covered. Here's how to kickstart your adventure:</p>
                    <ul className='list'>
                        <li className='paragraph'>🔥 **Instant Action:** Shoot us a WhatsApp message!<br/><a href='https://wa.me/27765916069' target='_blank' rel='noreferrer'>Tap here to connect!</a></li>
                        <li className='paragraph'>📞 **Chat Live:** Give us a ring and let's plan your session!<br/><a href='tel:+27765916069'>+27 (0)76 591 6069</a></li>
                        <li className='paragraph'>📧 **Drop Us a Line:** Email us with your kite dreams!<br/><a href='mailto:bestkitebruce@gmail.com'>bestkitebruce@gmail.com</a></li>
                        <li className='paragraph'>📍 **Visit Our Haven:** Swing by our shop and feel the stoke!<br/><a href="https://maps.app.goo.gl/S4qcQw3Bzfxz2gBTA">Find us here!</a></li>

                    </ul>
                    <p className='paragraph'>Please specify the type of lesson, date, and time that you would like to book.</p>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;