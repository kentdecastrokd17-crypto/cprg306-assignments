import GroceryItemList from "./GroceryItemList";

export default function Page() 
{
    return (
        <main className = "bg-blue-950 min-h-screen p-4 justify-center items-center flex flex-col">
            <h1 className = "text-3xl font-bold text-white mb-4">Shopping List</h1>
            <GroceryItemList />
        </main>
    );
}

