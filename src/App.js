import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import SideBar from "./components/SideBar";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App () {

  const [sortBy, setSortBy] = useState("price");
  const [type, setType] = useState("all");
  const [restrictions, setRestrictions] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)

  const sortedBakeryData = bakeryData.sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else {
      return a.calories - b.calories;
    }
  });

  const filteredBakeryData = sortedBakeryData.filter(item => {
    if (type === "all") return true;
    return type === item.categories.type;
  }).filter(item => {
      if (restrictions.length === 0) return true;
      return restrictions.every(restriction => item.categories.restrictions.includes(restriction));
    });

    function addToCart(name, price) {
      setCartItems([
        ...cartItems,
        {name: name}
      ]);
      setTotalPrice(totalPrice + price);
    }

    function removeFromCart(name, price) {
      const item = cartItems.find(item => item.name === name);
      const index = cartItems.indexOf(item);
      if (index > -1) { 
        cartItems.splice(index, 1); 
      }
      setCartItems(cartItems);
      setTotalPrice(totalPrice - price);
    }

  return (
    <div className="App">
      <h1>My Bakery</h1>
      <div className="main-grid">
        <SideBar
          sortBy={sortBy}
          setSortBy={setSortBy}
          type={type}
          setType={setType}
          restrictions={restrictions}
          setRestrictions={setRestrictions}
          cartItems={cartItems}
          totalPrice={totalPrice}
        />
        <div className="bakery-items">
          {filteredBakeryData.map(item => (
              <BakeryItem
                image={item.image}
                name={item.name}
                price={item.price}
                type={item.categories.type}
                restrictions={item.categories.restrictions}
                calories={item.calories}
                description={item.description}
                handleAddToCart={addToCart}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;