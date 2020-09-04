import React from 'react';
import './Results.css'

class Results extends React.Component{
    createJsx = () => {
        const res = this.props.results.map(x => <p>{x}</p>);
        return res;
    }
    render(){
        return(
            <div className='results'>
                {this.createJsx()}
            </div>
        )
    }
}

export default Results;