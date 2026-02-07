import ItemList from "./item-list";

export default function Page() {
    return (
        <main className = "min-h-screen bg-blue-950 p-8">
            <h1 className = "text-3xl font-bold text-white mb-6 text-center">
                Shopping list
            </h1>
            <div className = "max-w-4xl mx-auto">
                <ItemList />
            </div>
        </main>
    );
}
