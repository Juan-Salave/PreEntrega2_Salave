import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from "./components/NotFound"
import Fouter from "./components/Fouter"


function App() {
    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path = "/" element = { <ItemListContainer/> } />
                    <Route path = "/category/:categoryId" element = { <ItemListContainer/> } />
                    <Route path = "/detail/:id" element = { <ItemDetailContainer/> } />
                    <Route path = "*" element = { <NotFound/> } />
                    
                </Routes>
            <Fouter />
        </BrowserRouter>
    )
}
export default App
