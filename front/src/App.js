import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ProjectDetail from './pages/ProjectDetailPage/ProjectDetailPage';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return (
    <>
      {isPc && (
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      )}
      {isTablet && (
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      )}
      {isMobile && (
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      )}
    </>
  );
}

export default App;
