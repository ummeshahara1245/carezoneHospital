import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import HospitalGellery from '../HospitalGallery/HospitalGellery';
import Hospital from '../Hospital/Hospital';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hospital />
            <HospitalGellery />
            <Footer></Footer>
        </div>
    );
};

export default Home;