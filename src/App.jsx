import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";
import Trash from "./pages/Trash";
import Tasks from "./pages/Tasks";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import Team from "./pages/Team";
import { Toaster } from "sonner";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import SideBar from "./components/SideBar";

function Layout() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block ">
        {<SideBar />}
      </div>
      {/* {<MobileSideBar/>} */}
      <div className="flex-1 overflow-y-auto">
        {/* {<Navbar/>} */}
        <div className="p-4 2xl:px-10">{<Outlet />}</div>
      </div>
    </div>
  ) : (
    <Navigate to="/logIn" state={{ from: location }} replace />
  );
}
function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/ :status" element={<Tasks />} />
          <Route path="/In-progress/ :status" element={<Tasks />} />
          <Route path="/todo/ :status" element={<Tasks />} />
          <Route path="/team" element={<Team />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/task/ :id" element={<TaskDetails />} />
        </Route>

        <Route path="/logIn" element={<Register />} />
      </Routes>

      <Toaster richColor />
    </main>
  );
}

export default App;
