import React,{ createRef } from 'react';
import { cocktailContext } from '../cocktail-context';

class SearchFormComponent extends React.Component{
    textInput = createRef();
    componentDidMount(){
        this.textInput.current.focus();
    }
    render(){
        return <section className="section search">
            <form className="search-form" onSubmit={(e)=> e.preventDefault()}>
                <div className="form-control">
                    <label htmlFor="name">Search your favorite cocktail</label>
                    <input ref={this.textInput} type="text" onChange={(e)=>this.context.setSearchTermValue(e.target.value)}/>
                </div>
            </form>
        </section>
    }
}

SearchFormComponent.contextType = cocktailContext;

export default SearchFormComponent;