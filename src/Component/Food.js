import React from 'react';
import axios from 'axios';
import ResultFood from './ResultFood'
class Food extends React.Component{

constructor(props){
super(props);
this.state={
resultOfFoodUrl:[]
}
}


async componentDidMount(){
const Food_URL=await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=d7062a52&app_key=%202ee3f43c2a46be94ecec06c2437c9de7&diet=balanced&cuisineType=Middle%20Eastern&mealType=Dinner&calories=100-1000`)
console.log(Food_URL.data.hits);
this.setState({
    resultOfFoodUrl:Food_URL.data.hits
})

}



    render(){
        return(
            <>
    {this.state.resultOfFoodUrl.map((item)=>{
    return (
    <ResultFood
    
    label={item.recipe.label}
    image={item.recipe.image}
    ingredientLines={item.recipe.ingredientLines}
    yield={item.recipe.yield}
    calories={item.recipe.calories}
    mealType={item.recipe.mealType}
    image={item.recipe.image}

    />
    )
})}

            </>
        )
    }
}
export default Food;
