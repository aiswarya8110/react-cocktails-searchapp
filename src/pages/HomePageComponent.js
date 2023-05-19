import React from 'react';
import SearchFormComponent from '../components/SearchFormComponent';
import CocktailListComponent from '../components/CocktailListComponent';

class HomePageComponent extends React.Component{
    render(){
        return <>
        <SearchFormComponent/>
        <CocktailListComponent/>
        </>
    }
}

export default HomePageComponent;