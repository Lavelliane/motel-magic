import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import RoomDetails from "./components/RoomDetails";
import RoomList from "./components/RoomList";
import Home from "./pages/home/Home";
import Reserve from "./pages/reserve/Reserve";
import Track from "./pages/track/Track";
import Payment from "./pages/payment/Payment";
import Summary from "./pages/reserve/Summary";
import Support from "./pages/support/Support";
import Success from "./pages/payment/Success";
import Error from "./pages/Error/Error";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/roomList">
            <RoomList />
          </Route>
          <Route path="/reserve">
            <Reserve />
          </Route>
          <Route path="/track">
            <Track />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/checkout">
            <Summary />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/admin">
            <AdminLogin />
          </Route>
          <Route path="/adminDashboard$qyKPJ">
            <AdminDashboard />
          </Route>
          <Route path="/rooms/:id">
            <RoomDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
