import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/noPage";
import Home from "./components/home";
import Create from "./components/create";
import Profile from "./components/profile";

export default function App() {
  return (
    <>
      <div className="border-b border-neutral-800 p-2">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <a href="/" className="font-bold text-lg">
              History
            </a>
            <div className="flex gap-2">
              <a href="/profile">Profile</a>
              <a href="/create">Create</a>
            </div>
          </div>
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
