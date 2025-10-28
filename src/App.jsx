import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import ModelsPage from './pages/ModelsPage.jsx';
import MgWorldPage from './pages/MgWorldPage.jsx';
import MgLifePage from './pages/MgLifePage.jsx';
import MgCarePage from './pages/MgCarePage.jsx';
import MaintenancePage from './pages/MaintenancePage.jsx';
import WarrantyPage from './pages/WarrantyPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="modelos" element={<ModelsPage />} />
        <Route path="mg-world" element={<MgWorldPage />} />
        <Route path="mg-life" element={<MgLifePage />} />
        <Route path="mg-care" element={<MgCarePage />} />
        <Route path="mg-care-servicios" element={<ServicesPage />} />
        <Route path="mg-care-pauta-de-mantenimiento" element={<MaintenancePage />} />
        <Route path="mg-care-garantia" element={<WarrantyPage />} />
      </Route>
    </Routes>
  );
};

export default App;
