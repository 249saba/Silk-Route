import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import CompanyBio from "./Components/CompanyBio";
import NewJourney from "./Components/NewJourney";
import Signup from "./Components/Signup";
import "./App.css";
import Carousel from "./Components/Carousel";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <Carousel/>
        {/* <Routes>
          <Route path="/" element={<h1>Product Listing Component</h1>}></Route>
          <Route path="/add" element={<h1>Add Product Component</h1>}></Route>
          <Route path="/update" element={<h1>Update Product</h1>}></Route>
          <Route path="/logout" element={<h1>Logout</h1>}></Route>
          <Route path="/profile" element={<h1>Profile</h1>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes> */}
        <NewJourney/>
        <CompanyBio/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
