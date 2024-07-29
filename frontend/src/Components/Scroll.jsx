import React, { useEffect } from 'react';

function Scroll() {
  useEffect(() => {
    const backToTop = document.querySelector('.back-to-top');

    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    };

    window.addEventListener('load', toggleBackToTop);
    window.addEventListener('scroll', toggleBackToTop);

    return () => {
      // Clean up the event listeners when the component unmounts
      window.removeEventListener('load', toggleBackToTop);
      window.removeEventListener('scroll', toggleBackToTop);
    };
  }, []);

  return (
    <div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default Scroll;
