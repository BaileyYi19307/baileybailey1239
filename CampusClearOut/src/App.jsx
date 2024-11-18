import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Listings } from "./pages/Listings";
import { MyListings } from "./pages/MyListings";
import { MyRequests } from "./pages/MyRequests";
import { CreateListing } from "./components/CreateListing";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import MainLayout from "./MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ListingDetails } from "./pages/ListingDetails";

function App() {
  return (
    // Router is the root component that enables client-side routing in the app
    <Router> 
      
      {/* mainLayout is a layout wrapper that contains the NavBar and other shared UI elements*/}
      <MainLayout> 
        <Routes>
          
          {/* route for the main Listings page, available at the root path "/" */}
          <Route path="/" element={<Listings />} />
          
          {/* dynamic route for viewing a specific listing's details by its postId, accessible at "/listings/:postId" */}
          <Route path="/listings/:postId" element={<ListingDetails />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* route for the "My Listings" page, accessible at "/dashboard/mylistings" */}
          <Route path="/dashboard/mylistings" element={<MyListings />} />
          
          {/* route for creating a new listing, accessible at "/dashboard/mylistings/create" */}
          <Route path="/dashboard/mylistings/create" element={<CreateListing />} />
          
          {/* route for viewing "My Requests", accessible at "/dashboard/myrequests" */}
          <Route path="/dashboard/myrequests" element={<MyRequests />} />
          
        </Routes>
      </MainLayout>
    </Router>
  );
}


export default App;
