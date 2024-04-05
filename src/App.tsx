import Nav from "components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Post from "pages/Post";
const App = () => {
    return (
        <div className="h-dvh flex flex-col">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post" element={<Post />} />
            </Routes>
        </div>
    );
};
export default App;
