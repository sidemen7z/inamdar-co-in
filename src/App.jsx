import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={<AdminDashboard />}
          />
          {/* Service Routes */}
          <Route path="/proprietorship" element={<ServicePage service="Proprietorship" />} />
          <Route path="/partnership" element={<ServicePage service="Partnership" />} />
          <Route path="/opc" element={<ServicePage service="One Person Company" />} />
          <Route path="/llp" element={<ServicePage service="Limited Liability Partnership" />} />
          <Route path="/plc" element={<ServicePage service="Private Limited Company" />} />
          <Route path="/trust" element={<ServicePage service="Trust Registration" />} />
          <Route path="/society" element={<ServicePage service="Society Registration" />} />
          <Route path="/digital-signature" element={<ServicePage service="Digital Signature" />} />
          <Route path="/udyam" element={<ServicePage service="Udyam Registration" />} />
          <Route path="/startup-india" element={<ServicePage service="Startup India Registration" />} />
          <Route path="/fssai" element={<ServicePage service="FSSAI Registration" />} />
          <Route path="/professional-tax" element={<ServicePage service="Professional Tax" />} />
          <Route path="/darpan" element={<ServicePage service="Darpan Registration" />} />
          <Route path="/rcmc" element={<ServicePage service="RCMC Registration" />} />
          <Route path="/halal" element={<ServicePage service="Halal Certificate" />} />
          <Route path="/import-export" element={<ServicePage service="Import Export Code" />} />
          <Route path="/trade-license" element={<ServicePage service="Trade License" />} />
          <Route path="/gst-registration" element={<ServicePage service="GST Registration" />} />
          <Route path="/gst-filing" element={<ServicePage service="GST Filing" />} />
          <Route path="/lut-filing" element={<ServicePage service="LUT Filing Under GST" />} />
          <Route path="/itr-filing" element={<ServicePage service="ITR Filing" />} />
          <Route path="/gst-cancellation" element={<ServicePage service="GST Cancellation" />} />
          <Route path="/accounting" element={<ServicePage service="Accounting" />} />
          <Route path="/tds-return" element={<ServicePage service="TDS Return Filing" />} />
          <Route path="/professional-tax-reg" element={<ServicePage service="Professional Tax Registration" />} />
          <Route path="/trademark" element={<ServicePage service="Trademark Registration" />} />
          <Route path="/iso" element={<ServicePage service="ISO 9001-2015" />} />
        </Routes>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
