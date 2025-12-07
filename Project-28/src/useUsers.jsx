import { useState, useEffect } from "react";
import { fetchUsers } from "./Api";

export function useUsers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
