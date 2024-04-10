import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import Card from "./card";
import Jumbotron from "./jumbotron";

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
                        <Card
                            imageUrl="..."
                            title="Card 1"
                            text="Some quick example text to build on the card title and make up the bulk of the card's content."
                            link="#"
                        />
                    </div>
                    <div className="col ps-1 pe-1">
                        <Card
                            imageUrl="..."
                            title="Card 2"
                            text="Some quick example text to build on the card title and make up the bulk of the card's content."
                            link="#"
                        />
                    </div>
                    <div className="col ps-1 pe-1">
                        <Card
                            imageUrl="..."
                            title="Card 3"
                            text="Some quick example text to build on the card title and make up the bulk of the card's content."
                            link="#"
                        />
                    </div>
                    <div className="col ps-1 pe-1">
                        <Card
                            imageUrl="..."
                            title="Card 4"
                            text="Some quick example text to build on the card title and make up the bulk of the card's content."
                            link="#"
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;