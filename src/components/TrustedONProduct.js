
import React from 'react';

const TrustedONProduct = () => {
  const stickyStyle = {
    // backgroundColor: '#333',
    // color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    position: 'sticky',
    top: '0',
    zIndex: 100,
  };

  return (
    <nav className="navbar bg-dark" style={stickyStyle}>
      <div className="container">
        <div className="col-12">
          <div className="row">
            <p className="text-center text-light">
              Unlock your full trading potential with Exness Team pro.{' '}
              <span className="text-warning">Meet the team!</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TrustedONProduct;