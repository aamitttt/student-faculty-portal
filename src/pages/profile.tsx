import BackButton from "@/components/BackButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useState } from "react";

const initialProfile = {
  name: "Priya Sharma",
  email: "priya.sharma@example.com",
  role: "Student",
  id: "STU2024001",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
};

const Profile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [edit, setEdit] = useState(false);

  return (
    <div className="p-8 max-w-xl mx-auto">
      <BackButton />
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-24 h-24 rounded-full border-4 border-blue-200 mb-4"
        />
        <div className="text-center mb-4">
          <div className="text-xl font-bold text-blue-900">{profile.name}</div>
          <div className="text-blue-700">{profile.role}</div>
          <div className="text-blue-500 text-sm">{profile.email}</div>
          <div className="text-blue-400 text-xs">ID: {profile.id}</div>
        </div>
        {edit ? (
          <form
            className="w-full flex flex-col gap-3"
            onSubmit={e => {
              e.preventDefault();
              setEdit(false);
            }}
          >
            <Input
              value={profile.name}
              onChange={e => setProfile({ ...profile, name: e.target.value })}
              placeholder="Full Name"
            />
            <Input
              value={profile.email}
              onChange={e => setProfile({ ...profile, email: e.target.value })}
              placeholder="Email"
            />
            <Button type="submit" className="w-full">Save</Button>
          </form>
        ) : (
          <Button className="w-full" onClick={() => setEdit(true)}>
            Edit Profile
          </Button>
        )}
      </div>
    </div>
  );
};

export default Profile;