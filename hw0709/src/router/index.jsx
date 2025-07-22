//라우터세팅
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout"; // 헤더·탭바 고정
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/post/:id", element: <PostDetailPage /> },
    ],
  },
]);
