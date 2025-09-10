import { Sidebar } from "@/components/Sidebar";
import BackButton from "@/components/BackButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Sidebar role="faculty" />
      <div className="flex-1 p-8 max-w-xl mx-auto">
        <BackButton />
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="font-semibold text-blue-800 mb-2">Preferences</h2>
          <div className="flex items-center justify-between mb-4">
            <span>Dark Mode</span>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="font-semibold text-blue-800 mb-2">Change Password</h2>
          <form
            className="flex flex-col gap-3"
            onSubmit={e => {
              e.preventDefault();
              // Dummy submit
            }}
          >
            <Input
              type="password"
              placeholder="Current Password"
              value={passwords.current}
              onChange={e => setPasswords({ ...passwords, current: e.target.value })}
            />
            <Input
              type="password"
              placeholder="New Password"
              value={passwords.new}
              onChange={e => setPasswords({ ...passwords, new: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Confirm New Password"
              value={passwords.confirm}
              onChange={e => setPasswords({ ...passwords, confirm: e.target.value })}
            />
            <Button type="submit" className="w-full">Update Password</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;