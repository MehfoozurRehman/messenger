import { Outlet } from "react-router";

export default function chatRoom() {
  return (
    <div className="chat__room__container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

function Sidebar() {
  return <div className="chat__room__container__sidebar">sidebar</div>;
}
