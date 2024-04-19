import { useState, useEffect } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    setLoading(true);
    console.log("Email:", email);
    console.log("Password:", password);
    setLoading(false);
    console.log("Loading:", loading);
  }, [email, password, loading]);

  return { email, setEmail, password, setPassword, loading };
};
