import React from 'react';
import './Input.css'


class Input extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const baseUrl = 'https://swapi-thinkful.herokuapp.com/api/';
        const search = `people/?search=${this.formInput.current.value}`
        fetch(`${baseUrl}${search}`)
            .then(res => res.json())
            .then(resJson => resJson.results.map(result => result.name))
            .then(results => this.props.handleGetState(results));
      }

      constructor(props){
          super(props);
          this.formInput=React.createRef();
      }
      
    
    render() {
        return (
            <div className='input'>
                <form className='input-form' onSubmit={e =>
                    this.handleSubmit(e)}>
                    <input type='text' ref={this.formInput} placeholder='Search'></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>

        )
    }
}

export default Input;