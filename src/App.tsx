import "./App.css";
import ProductsList from "./Products/ProductsList";
import ProductForm from "./Products/ProductForm";
import store from "./store";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ProductsList />
                <ProductForm />
            </div>
        </Provider>
    );
}

export default App;
