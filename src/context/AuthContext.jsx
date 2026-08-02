import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (user) => {
    setUser(user);
  };
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();

      setUser(data.session?.user ?? null);
      setLoading(false);
    };

    getSession();
  }, []);
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
