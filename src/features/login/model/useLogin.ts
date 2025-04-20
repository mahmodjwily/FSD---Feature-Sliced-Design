import { useDispatch, useSelector } from "react-redux";

import { login, logout } from "@/entities/user/model";
import { AppDispatch, RootState } from "@/app/stores/store";

export const useLogin = () => {
  const dispatch: AppDispatch = useDispatch();

  const { isLoading } = useSelector((state: RootState) => state.user);

  const loginUser = (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  const logoutUser = () => dispatch(logout());

  return { logoutUser, loginUser, isLoading };
};
