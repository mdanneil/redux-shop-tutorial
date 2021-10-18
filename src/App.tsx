import "./App.css";
import ProductsList from "./Products/ProductsList";
import ProductForm from "./Products/ProductForm";
import store from "./store";
import { Provider } from "react-redux";
import Cart from "./Cart/Cart";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ProductsList />
                <ProductForm />
                <Cart />
            </div>
        </Provider>
    );
}

export default App;
