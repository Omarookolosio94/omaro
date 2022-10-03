import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Contact from './pages/Contact';
import NotFound from './pages/Notfound';
import Home from './pages/Home';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
