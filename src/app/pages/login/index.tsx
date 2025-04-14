import { RootState } from "@/app/stores/store";
import { AuthFrom } from "@/features/login/ui";
import { ROUTES } from "@/shared/config";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const LoginPage = () => {
  const { user } = useSelector((state: RootState) => state.user);

  if (user?.id) {
    return <Navigate to={ROUTES.HOME} replace />;
  }
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 border rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <AuthFrom />
      </div>
    </div>
  );
};
