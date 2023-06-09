import React from 'react';
import { withRouter } from 'react-router';
import LoadingComponent from '../components/LoadingComponent';
import { Link } from 'react-router-dom';

class SingleCocktailPageComponent extends React.Component{

    state = {loading: true, cocktail: null};

    async getCocktail(){
       try{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.cocktailId}`);
        const data =await response.json();
        console.log(data);
        if(data.drinks){
            const { strDrink: name, 
                strDrinkThumb: image,
                strAlcoholic: info,
                strCategory: category,
                strGlass: glass,
                strInstructions: instructions,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5 
                } = data.drinks[0];
            const ingredients = [
                strIngredient1, 
                strIngredient2, 
                strIngredient3, 
                strIngredient4, 
                strIngredient5]
            const newCocktail = {name, image, info, category,glass, instructions, ingredients};
            this.setState({cocktail: newCocktail, loading: false})
        }
        else{
            this.setState({cocktail: null, loading: false});
        }
       }
       catch(error){
        console.log(error);
        this.setState({loading: false});
       }
    }

    componentDidMount(){
        const { cocktailId } = this.props.match.params;
        this.cocktailId = cocktailId;
        this.getCocktail();
    }
    render(){
        if(this.state.loading){
            return <LoadingComponent/>
        }
        if(!this.state.cocktail){
            return <h2 className="section-title">No cocktail to display</h2>
        }

        const { name, image, category, info, glass, instructions, ingredients } = this.state.cocktail;
        console.log(ingredients);
        return <section className="section cocktail-section">
            <Link to="/" className="btn btn-primary">
                back home
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
                <img src={image} alt={name}/>
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name :</span>
                        {name}
                    </p>
                    <p>
                        <span className="drink-data">category :</span>
                        {category}
                    </p>
                    <p>
                        <span className="drink-data">glass :</span>
                        {glass}
                    </p>
                    <p>
                        <span className="drink-data">instructions :</span>
                        {instructions}
                    </p>
                    <p>
                        <span className="drink-data">info :</span>
                        {info}
                    </p>
                    <p>
                        <span className="drink-data">Ingredients :</span>
                        {ingredients.map((item)=>{
                            return item ? <span key={item}>{item}</span> : null;
                        })}
                    </p>
                </div>
            </div>
        </section>

    }
}

export default withRouter(SingleCocktailPageComponent);