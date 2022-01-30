//criar componete funcional usando "rafce" que nos permite criar com facilidade componetes funcionais
import React from "react";
//produtos
//import Products from "./components/Products/Products";
//navbar
//import Navbar from "./components/Navbar/Navbar";


//para importar conponetes demaira mais facil
import{Products, Navbar} from './components';

const App = () => {
    return(
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App; 