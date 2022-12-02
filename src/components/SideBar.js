import "./SideBar.css";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material';

export default function SideBar ({ sortBy, setSortBy, type, setType, restrictions, setRestrictions, cartItems, totalPrice }) {

    const updateRestrictionCheckbox = (checked, label) => {
        if (checked) {
            setRestrictions([...restrictions, label]);
        } else {
            setRestrictions(restrictions.filter(item => item !== label));
        }
    };

    return (
        <div className="side-bar">
            <FormControl>
                <FormLabel id="sort-by-radio-buttons-group-label">Sort by</FormLabel>
                <RadioGroup
                    aria-labelledby="sort-by-radio-buttons-group-label"
                    name="sort-by-radio-buttons-group"
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                >
                    <FormControlLabel value="price" control={<Radio />} label="Price" />
                    <FormControlLabel value="calories" control={<Radio />} label="Calories" />
                </RadioGroup>

                <FormLabel id="type-radio-buttons-group-label">Types</FormLabel>
                <RadioGroup
                    aria-labelledby="type-radio-buttons-group-label"
                    name="type-radio-buttons-group"
                    value={type}
                    onChange={e => setType(e.target.value)}
                >
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                    <FormControlLabel value="bread" control={<Radio />} label="Bread" />
                    <FormControlLabel value="cake" control={<Radio />} label="Cake" />
                    <FormControlLabel value="pastry" control={<Radio />} label="Pastry" />
                </RadioGroup>

                <FormGroup>
                    <FormLabel id="restrictions-checkbox-group-label">Dietary Restrictions</FormLabel>
                    <FormControlLabel control={<Checkbox checked={restrictions.includes("gluten-free")} onChange={e => updateRestrictionCheckbox(e.target.checked, "gluten-free")} />} label="Gluten-free" />
                    <FormControlLabel control={<Checkbox checked={restrictions.includes("dairy-free")} onChange={e => updateRestrictionCheckbox(e.target.checked, "dairy-free")} />} label="Dairy-free" />
                    <FormControlLabel control={<Checkbox checked={restrictions.includes("nut-free")} onChange={e => updateRestrictionCheckbox(e.target.checked, "nut-free")} />} label="Nut-free" />
                </FormGroup>
            </FormControl>
            <div className="cart">
                <h2>Cart</h2>
                {cartItems.map((item, index) => (
                    <p>{item.name}</p>
                    )
                    )
                }
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
}