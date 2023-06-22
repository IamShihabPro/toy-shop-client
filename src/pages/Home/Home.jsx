import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Category from '../../components/Category/Category';
import Gallery from '../../components/Gallery/Gallery';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Header></Header>
            <Gallery></Gallery>
            <Category></Category>
            
            
        </div>
    );
};

export default Home;