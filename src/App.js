import Header from "./components/Header";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import productList from "./components/ProductList";
import productDetails from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
     
      <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={productList}/>
            <Route path="/product/:productId" exact component={productDetails}/>
            <Route>404 Not Found!</Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
