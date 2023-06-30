import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogCard from './Components/BlogCard';
import Header from './Components/Header';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<BlogCard />} />
          <Route path="posts/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
