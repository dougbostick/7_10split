import React from 'react';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import Footer from '../features/footer/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="actualApp">
      <div className="top">
        <Navbar />
      </div>
      <div className="middle">
        <AppRoutes />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </div>
  );
};

export default App;
