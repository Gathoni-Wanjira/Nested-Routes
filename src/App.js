import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Booklist from './Pages/Booklist';
import Book from './Pages/Book';
import Newbook from './Pages/Newbook';
import Contact from './Pages/Contact';
import Notfound from './Pages/Notfound';
function App() {
    return (

        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About </Link>
                    </li>
                    <li>
                        <Link to="/books"> Booklist</Link>
                    </li>
                    <li>
                        <Link to="/books/new"> Newbooks </Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact </Link>
                    </li>
                </ul>
            </nav>


            <Routes>

                <Route path='/' element={< Home />} />
                <Route path='/about' element={< About />} />

                {/* <Route path="/books" element={<Booklist />} />
                <Route path="/books/:id" element={<Book />} />
                <Route path="/books/new" element={<Newbook />} /> */}

                <Route path = '/books'>
                    <Route index element = {<Booklist />} />
                    <Route path=':id' element = {< Book/>} />
                    <Route path='new' element = {< Newbook/>}/>

                </Route >


                <Route path='/contact' element={< Contact />} />
                <Route path='*' element={< Notfound />} />



                {/* 
                <Route path='/books'>
                    <Route index element={< Booklist />} />
                    <Route path=':id' element={< Book />} />
                    <Route path='new' element={< Newbook />} />
                </Route>
                */}

            </Routes>

        </>


    );
}

export default App;
