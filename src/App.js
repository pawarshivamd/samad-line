import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./app.css";
import Navbar from "components/navbar/Navbar";
import ProtectedRoute from "helpers/authHelper";
import ProductList from "containers/ProductList";
import Footer from "components/footer/Footer";
import Loader from "components/common/loader/Loader";
import PrivacyNPolicy from "containers/PrivacyNPolicy";
import TermsOfUse from "containers/TermsOfUse";
// import AboutUs from "containers/AboutUs";

const Dashboard = lazy(() => import("./containers/Dashboard"));
const ProductDetails = lazy(() => import("./containers/ProductDetails"));
const Cart = lazy(() => import("./containers/Cart"));
const Wishlist = lazy(() => import("containers/Wishlist"));
const Address = lazy(() => import("./containers/Address"));
const NewAddress = lazy(() => import("./containers/NewAddress"));
const EditAddress = lazy(() => import("./containers/EditAddress"));
const UserProfile = lazy(() => import("./containers/UserProfile"));
const ContactUs = lazy(() => import("./containers/ContactUs"));
// const Blog = lazy(() => import('./containers/Blog'));
// const BlogDetails = lazy(() => import('./containers/BlogDetails'));
const OrderList = lazy(() => import("./containers/OrderList"));
const OrderDetails = lazy(() => import("./containers/OrderDetails"));
const EditReview = lazy(() => import("./containers/EditReview"));
// const AboutUs = lazy(() => import('./containers/AboutUs'));
// const PrivacyNPolicy = lazy(() => import('./containers/PrivacyNPolicy'));
// const TermsOfUse = lazy(() => import('./containers/TermsOfUse'));
const RefundPolicy = lazy(() => import("./containers/RefundPolicy"));
const ShippingPolicy = lazy(() => import("./containers/ShippingPolicy"));
const NotFound = lazy(() => import("containers/NotFound"));

function App() {
  return (
    <div className="h-100 ">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/products/:params?" element={<ProductList />} />
            <Route exact path="/product/:id" element={<ProductDetails />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            {/* <Route exact path="/blog" element={<Blog />} /> */}
            {/* <Route exact path="/blog/:id" element={<BlogDetails />} /> */}
            {/* <Route exact path="/about-us" element={<AboutUs />} /> */}
            <Route
              exact
              path="/privacy-n-policy"
              element={<PrivacyNPolicy />}
            />
            <Route exact path="/terms-of-use" element={<TermsOfUse />} />
            <Route exact path="/refund-policy" element={<RefundPolicy />} />
            <Route exact path="/shipping-policy" element={<ShippingPolicy />} />

            <Route
              exact
              path="/user/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/user/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/user/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/user/address"
              element={
                <ProtectedRoute>
                  <Address />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/user/address/new"
              element={
                <ProtectedRoute>
                  <NewAddress />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/user/address/edit/:id"
              element={
                <ProtectedRoute>
                  <EditAddress />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/user/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/user/orders"
              element={
                <ProtectedRoute>
                  <OrderList />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/user/orders/:id"
              element={
                <ProtectedRoute>
                  <OrderDetails />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/user/order/:id/review"
              element={
                <ProtectedRoute>
                  <EditReview />
                </ProtectedRoute>
              }
            />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
