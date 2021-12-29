//* prendo le props da app.js

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients && ingredients.map(ingredient =>
                    <ul>
                        {ingredient.text}
                    </ul>
                )}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
};

export default Recipe;