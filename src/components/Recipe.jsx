import styles from './Recipe.module.scss';

//* prendo le props da app.js

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <ol className={styles.ol}>
                {ingredients && ingredients.map(ingredient =>
                    <ul>
                        {ingredient.text}
                    </ul>
                )}
            </ol>
            <p>Calories: {Math.round(calories)}</p>
            <img className={styles.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;