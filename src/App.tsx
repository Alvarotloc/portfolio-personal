import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
const App = ():JSX.Element => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App