import React from "react";
import { useUsers } from "./useUsers";

export default function UsersList() {
  const { data, loading } = useUsers();

  if (loading) return <p>Loading…</p>;

  return (
    <ul className="w-screen h-screen flex flex-col gap-4 items-center justify-center bg-black text-white text-2xl">
      {data.map(user => (
        <li key={user.id}>
          {user.name} — {user.role}
        </li>
      ))}
    </ul>
  );
}
