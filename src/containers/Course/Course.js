import React, { Component } from 'react';

class Course extends Component {


    componentDidUpdate() {
        console.log('Update:',this.props.location.query);
    }
    
    render () {
        return (
            <div>
                <h1>{this.props.location.query.title}</h1>
                <p>{this.props.location.query.id}</p>
            </div>
        );
    }
}

export default Course;