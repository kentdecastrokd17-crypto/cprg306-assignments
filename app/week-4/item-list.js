import Items from "./item";
import items from "./item.json";

export default function ItemList() {
    return (
        <ul className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
                <Items
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
            ))}
        </ul>
    );
}