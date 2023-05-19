import React from 'react';
import CocktailComponent from '../components/CocktailComponent';
import LoadingComponent from './LoadingComponent';
import { cocktailContext } from '../cocktail-context';

class CocktailListComponent extends React.Component{
    render(){
        console.log("CocktailListComponent render");
        if(this.context.loading){
            return <LoadingComponent/>
        }
        if(this.context.cocktails.length === 0){
            return <h2 className="section-title">
                No Cocktails Matched Your Search Criteria
                </h2>
        }
        else{
            return <section className="section">
                <h2 className="section-title">Cocktails</h2>
                <div className="cocktails-center">
                    {this.context.cocktails.map((item)=>{
                        return <CocktailComponent key={item.id} item={item}/>
                    })}
                </div>
            </section>
        }

    }
}

CocktailListComponent.contextType = cocktailContext;

export default CocktailListComponent;