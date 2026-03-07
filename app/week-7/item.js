export default function Item({ name, quantity, category }) {
    return (
        <li className = "p-4 bg-teal-900 border border-white rounded-lg shadow-sm list-none">
            <div className = "flex flex-col">
                <span className = "text-xl font-bold text-white">{name}</span>
                <span className = "text-slate-400">{category}</span>
                <span className = "text-slate-400">Qty: {quantity}</span>
            </div>
        </li>
    );
}