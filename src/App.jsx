// App.jsx
import Counter from "./components/Counter.jsx";
import InputText from "./components/InputText.jsx";
import ItemAdd from "./components/ItemAdd.jsx";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <ItemAdd />
    </div>
  );
};

export default App;