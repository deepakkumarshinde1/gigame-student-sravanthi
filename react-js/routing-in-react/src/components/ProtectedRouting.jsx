import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouting({ isLogin, type }) {
  return (
    <>
      {type === 1 ? (
        <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>
      ) : (
        <>{isLogin ? <Navigate to="/" /> : <Outlet />}</>
      )}
    </>
  );
}

export default ProtectedRouting;
