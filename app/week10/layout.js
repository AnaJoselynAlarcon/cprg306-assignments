import { AuthContextProvider } from "./_utils/auth-context";

const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;

//provides the layout for the app will get wrapped around the auth context provider
