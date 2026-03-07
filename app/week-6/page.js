// page.js logic check
export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]); // Properly updating state with the new item
  }

  return (
    <main className="p-10 bg-gray-600 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} /> 
      <div className="mt-8">
        <ItemList items={items} />
      </div>
    </main>
  );
}