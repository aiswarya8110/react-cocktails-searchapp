import React from 'react';
import { Link } from 'react-router-dom';

class ErrorPageComponent extends React.Component{
    render(){
        return <section className="error-page section">
            <div className="error-container">
                <h1>oops! It's a dead end</h1>
                <Link to="/" className="btn btn-primary">back home</Link>
            </div>
        </section>
    }
}

export default ErrorPageComponent;