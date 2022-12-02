# Development

### Link to Deployed Website
https://sleepypig118.github.io/development
### Goal and Value of the Application
This is a bakery shop website allowing users to add/remove, sort, filter bakery based on their interests.
It will display bakery basic info, items in cart and the total price of current items added into the cart.
### Usability Principles Considered
The side bar is located at the left side of the web page and bakery items are displayed in the center place next to it.
The side bar displays sort by, filter options, items in cart and total price. When users sort/filter/add/remove items, they can easily see corresponding changes in the center main grid/cart.
### Organization of Components
There are 3 major components.
App is the main one, which connects side bar and bakery item and displays the final web page. I defined all the react states here.
Side bar displays sort by, filter options, items in cart and total price.
Bakery item displays the list of all the bakery items' basic info with add/remove button.
### How Data is Passed Down Through Components
Side bar: The state and setState of sort by and filter options, items in cart and total price are passed through props
Bakery item: Bakery item basic info and add to/remove from cart functions are passed through props
### How the User Triggers State Changes
When the user select/deselects options of sort by, filters in the side bar, the state of sort by and filter options will change.
When the user clicks add to/remove from cart buttons, the state of cart items and total price will change.
