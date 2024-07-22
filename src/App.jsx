import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
  SignUpPage,
  LoginPage,
  ShopCategoriesPage,
  FavoriteShopsPage,
  LastChanceShopsPage,
  RecentShopsPage,
  CartPage,
  OrderConfirmationPage,
} from "./pages";
import './App.css'

function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="shops" element={<ShopCategoriesPage />} />
            <Route path="favorite-shops" element={<FavoriteShopsPage />} />
            <Route path="last-chance-shops" element={<LastChanceShopsPage />} />
            <Route path="recent-shops" element={<RecentShopsPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route
              path="order-confirmation"
              element={<OrderConfirmationPage />}
            />
            <Route path="*" element={<ShopCategoriesPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
