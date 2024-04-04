import React from "react";

//include images into your bundle
import Footer from "./footer";
import NavBar from "./navbar";
import Card from "./card";
import Jumbotron from "./jumbotron";
//create your first component
const Home = () => {
	return (

		<div className="text-center">
			<NavBar />
			<div className="container-fluid light-blue-bg mb-5">
                <div className="container">
                    <Jumbotron />
                </div>
            </div>
            <div className="container">
			 
            <div className="row">
                <div className="col">
                    <Card />
                </div>
                <div className="col" style={{ marginLeft: '5px', marginRight: '5px' }}>
                    <Card />
                </div>
                <div className="col" style={{ marginLeft: '5px', marginRight: '5px' }}>
                    <Card />
                </div>
                <div className="col">
                    <Card />
			
                </div>
				<Footer />
            </div>
			
        </div>
		
        </div>
	);
};

export default Home;

