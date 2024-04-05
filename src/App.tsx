import Nav from "components/Nav/Nav";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<div>hi</div>} />
                <Route path="/login" element={<div>login</div>} />
            </Routes>
        </div>
    );
};
export default App;
