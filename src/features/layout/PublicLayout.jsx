import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import PageLoading from "../../components/PageLoading";
import NetworkStatus from "../../components/NetworkStatus";

const PublicLayout = () => {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white transition-all">
      <Header />
      <NetworkStatus />
      <Suspense fallback={<PageLoading />}>
        <Toaster
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="mt-4"
        />
        <div className="flex-grow ">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </main>
  );
};

export default PublicLayout;
