import "./BakeryItem.css";

export default function BakeryItem (props) {
    const image = props.image;
    const name = props.name;
    const price = props.price;
    const type = props.type;
    const restrictions = props.restrictions;
    const calories = props.calories;
    const description = props.description;
    const handleAddToCart = props.handleAddToCart;
    const cartItems = props.cartItems;
    const removeFromCart = props.removeFromCart

    return (
        <div className="bakery-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Type: {type}</p>
            <p>Dietary Restrictions: {restrictions.join(" ")}</p>
            <p>Calories: {calories}</p>
            <p className="bakery-item-description">{description}</p>
            <button onClick={() => handleAddToCart(name, price)}>Add to Cart</button>
            {cartItems.map(item => item.name).includes(name) && <button onClick={() => removeFromCart(name, price)}>Remove from Cart</button>}
        </div>
    );
};
