'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export const PromoPopup = () => {
  const [show, setShow] = useState(false);
  const [modalLoaded, setModalLoaded] = useState(false);

  useEffect(() => {
    // Dynamically import Bootstrap's JavaScript
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
      setModalLoaded(true);
      
      // Show popup after a short delay on every page load
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);

      return () => clearTimeout(timer);
    });
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {modalLoaded && (
        <div 
          className={`modal fade ${show ? 'show' : ''}`} 
          id="promoModal" 
          tabIndex={-1} 
          style={{ 
            display: show ? 'block' : 'none', 
            backgroundColor: 'rgba(0,0,0,0.5)' 
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header pink text-white" style={{ 
            backgroundColor: '#AA468E' 
          }}>
                <h5 className="modal-title text-white">🎉 Free 2-Day Coding Program</h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row align-items-center mb-3">
                    <div className="col-2">
                      <span className="fs-2">📚</span>
                    </div>
                    <div className="col-10">
                      <p className="mb-2"><strong>Registration now open, limited spots available</strong></p>
                      <p className="text-muted">Exciting educational experience for your child - Completely FREE!</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-12">
                      <ul className="list-unstyled">
                        <li className="mb-2">✅ Introduction to Game Development</li>
                        <li className="mb-2">✅ Engaging Learning Experience</li>
                        <li className="mb-2">✅ Interactive Sessions</li>
                        <li>✅ No Cost Enrollment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={handleClose}
                >
                  Close
                </button>
                <Link 
                  href="https://promo.rydlearning.com/promo/parent/register?promoID=103" 
                  className="btn pink text-white" style={{ 
                    backgroundColor: '#AA468E' 
                  }}>
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
