import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Auth pages (legacy, not used in new flow)
import Login from "./pages/login";
import RegisterStudent from "./pages/register-student";
import RegisterFaculty from "./pages/register-faculty";
import ForgotPassword from "./pages/forgot-password";
import ResetPassword from "./pages/reset-password";

// Student
import StudentDashboard from "./pages/student/dashboard";
import StudentTimetable from "./pages/student/timetable";
import StudentNotesAssignments from "./pages/student/notes-assignments";
import StudentUploadDocuments from "./pages/student/upload-documents";
import StudentProgress from "./pages/student/progress";

// Faculty
import FacultyDashboard from "./pages/faculty/dashboard";
import FacultyUploadNotes from "./pages/faculty/upload-notes";
import FacultyManageTimetables from "./pages/faculty/manage-timetables";
import FacultyAttendance from "./pages/faculty/attendance";
import FacultyMarksEntry from "./pages/faculty/marks-entry";
import FacultyReviewDocuments from "./pages/faculty/review-documents";

// Events
import EventAnnouncements from "./pages/events/announcements";
import EventCalendar from "./pages/events/calendar";
import EventDetails from "./pages/events/details";
import EventRegistration from "./pages/events/registration";
import CertificateDownload from "./pages/events/certificate-download";

// Profile & Settings
import Profile from "./pages/profile";
import Notifications from "./pages/notifications";
import Settings from "./pages/settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Auth (legacy, not used in new flow) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register-student" element={<RegisterStudent />} />
          <Route path="/register-faculty" element={<RegisterFaculty />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* Student */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/timetable" element={<StudentTimetable />} />
          <Route path="/student/notes-assignments" element={<StudentNotesAssignments />} />
          <Route path="/student/upload-documents" element={<StudentUploadDocuments />} />
          <Route path="/student/progress" element={<StudentProgress />} />
          {/* Faculty */}
          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
          <Route path="/faculty/upload-notes" element={<FacultyUploadNotes />} />
          <Route path="/faculty/manage-timetables" element={<FacultyManageTimetables />} />
          <Route path="/faculty/attendance" element={<FacultyAttendance />} />
          <Route path="/faculty/marks-entry" element={<FacultyMarksEntry />} />
          <Route path="/faculty/review-documents" element={<FacultyReviewDocuments />} />
          {/* Events */}
          <Route path="/events/announcements" element={<EventAnnouncements />} />
          <Route path="/events/calendar" element={<EventCalendar />} />
          <Route path="/events/details" element={<EventDetails />} />
          <Route path="/events/registration" element={<EventRegistration />} />
          <Route path="/events/certificate-download" element={<CertificateDownload />} />
          {/* Profile & Settings */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;