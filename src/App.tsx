import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import {
  AboutScreen,
  ContactScreen,
  DashboardHomeScreen,
  Error404Screen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  ServicesScreen,
} from "@/screens";

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="flex h-full flex-col overflow-hidden bg-gray-50 transition-colors dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route element={<LoginScreen />} path="/login" />
          <Route element={<AboutScreen />} path="/about" />
          <Route element={<ServicesScreen />} path="/services" />
          <Route element={<ContactScreen />} path="/contact" />
          <Route element={<ProfileScreen />} path="/profile/*" />
          <Route element={<DashboardHomeScreen />} path="/dashboard/*" />
          <Route element={<HomeScreen />} path="/" />
          <Route element={<Error404Screen />} path="*" />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
