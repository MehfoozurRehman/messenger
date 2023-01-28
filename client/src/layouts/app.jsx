import { Outlet } from "react-router-dom";

export const meta = {
  title: "Messenger",
  description: "Messenger",
  image: "/favicon.svg",
  url: "https://vitefilerouter.com",
};

export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
