import React, { createContext } from 'react';

const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const cocktailContext = createContext(null);

export class CocktailContextProviderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchTerm: "a", loading: true, cocktails: []};
        this.setSearchTermValue = this.setSearchTermValue.bind(this);
    }

    setSearchTermValue(inputValue){
        this.setState({searchTerm: inputValue})
    }

    async fetchDrinksData(){
        this.setState({loading: true});
        const response = await fetch(`${url}${this.state.searchTerm}`);
        const data = await response.json();
        const { drinks } = data;

        if(drinks){
           const newCocktails = drinks.map((item)=>{
                const { idDrink, 
                    strDrink, 
                    strDrinkThumb, 
                    strAlcoholic, 
                    strGlass } = item;

                return {id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass}
            });

            this.setState({cocktails: newCocktails, loading: false});
        }
        else{
            this.setState({cocktails: [], loading: false});
        }
    }

    componentDidMount(){
        this.fetchDrinksData();
    }

    componentDidUpdate(_, prevState){
        if(prevState.searchTerm !== this.state.searchTerm){
            this.fetchDrinksData();
        }
    }

    render(){
        console.count("CocktailContextProviderComponent render");
        console.log(this.state.loading);
        const { searchTerm, loading, cocktails } = this.state;
        return <cocktailContext.Provider value={{loading, searchTerm, cocktails, setSearchTermValue: this.setSearchTermValue}}>
            {this.props.children}
        </cocktailContext.Provider>
    }
}