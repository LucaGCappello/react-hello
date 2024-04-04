import React from 'react';

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Welcome to our Introduction Box</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec hendrerit ex. Fusce aliquam, massa id consectetur placerat, sapien quam convallis dolor, sit amet semper turpis ligula et magna.</p>
            <hr className="my-4" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    );
}

export default Jumbotron;