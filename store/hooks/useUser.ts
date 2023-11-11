import { useAppSelector } from "./redux";

export const useUser = () => {
  const user = useAppSelector((state) => state.userSlice.user);
  const token = useAppSelector((state) => state.userSlice.token);
  return { user, token };
}