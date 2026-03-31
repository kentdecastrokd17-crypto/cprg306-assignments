export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li
            onClick={onSelect}
            className="p-4 bg-teal-900 border border-white rounded-lg shadow-sm list-none cursor-pointer hover:bg-teal-700 transition"
        >
            <div className="flex flex-col">
                <span className="text-xl font-bold text-white">{name}</span>
                <span className="text-slate-400">Quantity: {quantity}</span>
                <span className="text-slate-400">Category: {category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </div>
        </li>
    );
}