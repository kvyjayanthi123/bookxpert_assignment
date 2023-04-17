import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./pages/Header/Header";
import "./App.scss";
import { Main } from "./pages/Main";
import SignIn from "./pages/SignIn";

export const App = (props) => {
    return (
        <>
        <BrowserRouter>
        <Header />
        <Routes>
        <Route path='' element={<Main />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/register' element={<SignIn />} />
            <Route path='*' element={<Main />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}