import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/action/login.action";
import { IUserInfo, RootState } from "../../store/types";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

const AuthProvider: React.FC = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector<RootState, boolean>(
    (state) => state.login.loading
  );
  const user = useSelector<RootState, IUserInfo | null>(
    (state) => state.login.loggedUser
  );

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (loading) return <LoadingIndicator />;
  else return <>{props.children}</>;
};

export default AuthProvider;
