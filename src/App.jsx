import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CamperDetailPage = lazy(() =>
  import("./pages/CamperDetailPage/CamperDetailPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id/" element={<CamperDetailPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="" element={<Features />} />
        </Route>
        <Route path="*" element={<NotFoundPage F />} />
      </Routes>
    </Suspense>
  );
}

export default App;
