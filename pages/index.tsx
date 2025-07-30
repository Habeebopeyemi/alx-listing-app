import Image from "next/image";
import { useUser } from "@/src/context/UserContext";

export default function UserProfile() {
  const { user, setUser } = useUser();
  const updateUser = () => {
    setUser({ name: "John Doe", email: "john@example.com" });
  };

  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-2 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button
        className="bg-white text-gray-500 p-2 mt-3 rounded-lg"
        onClick={updateUser}>
        Update User
      </button>
    </div>
  );
}
