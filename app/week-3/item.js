export default function Item({ name, quantity, category })
{
    return (
        <li className = "p-4 m-4 bg-teal-900 border border-white max-w-lg rounded-lg">
            <h2 className = "text-xl font-bold text-white">{name}</h2>
            <p className="text-white text-sm">Quantity: {quantity}</p>
            <p className="text-white text-sm">Category: {category}</p>
        </li>
    );
}