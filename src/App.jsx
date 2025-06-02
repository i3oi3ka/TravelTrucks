import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const KemperDetailPage = lazy(() =>
  import("./pages/KemperDetailPage/KemperDetailPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<KemperDetailPage />} />
        <Route path="*" element={<NotFoundPage F />} />
      </Routes>
    </Suspense>
  );
}

export default App;
