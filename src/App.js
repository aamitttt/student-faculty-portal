import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";

// Auth pages (legacy, not used in new flow)
import Login from "./pages/login.js";
import RegisterStudent from "./pages/register-student.js";
import RegisterFaculty from "./pages/register-faculty.js";
import ForgotPassword from "./pages/forgot-password.js";
import ResetPassword from "./pages/reset-password.js";

// Student
import StudentDashboard from "./pages/student/dashboard.js";
import StudentTimetable from "./pages/student/timetable.js";
import StudentNotesAssignments from "./pages/student/notes-assignments.js";
import StudentUploadDocuments from "./pages/student/upload-documents.js";
import StudentProgress from "./pages/student/progress.js";

// Faculty
import FacultyDashboard from "./pages/faculty/dashboard.js";
import FacultyUploadNotes from "./pages/faculty/upload-notes.js";
import FacultyManageTimetables from "./pages/faculty/manage-timetables.js";
import FacultyAttendance from "./pages/faculty/attendance.js";
import FacultyMarksEntry from "./pages/faculty/marks-entry.js";
import FacultyReviewDocuments from "./pages/faculty/review-documents.js";
import FacultyStudentList from "./pages/faculty/student-list.js";
import FacultyMessages from "./pages/faculty/messages.js";
import FacultyAnalytics from "./pages/faculty/analytics.js";
import FacultyNotifications from "./pages/faculty/notifications.js";

// Events
import EventAnnouncements from "./pages/events/announcements.js";
import EventCalendar from "./pages/events/calendar.js";
import EventDetails from "./pages/events/details.js";
import EventRegistration from "./pages/events/registration.js";
import CertificateDownload from "./pages/events/certificate-download.js";

// Profile & Settings
import Profile from "./pages/profile.js";
import Notifications from "./pages/notifications.js";
import Settings from "./pages/settings.js";

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
          <Route path="/faculty/student-list" element={<FacultyStudentList />} />
          <Route path="/faculty/messages" element={<FacultyMessages />} />
          <Route path="/faculty/analytics" element={<FacultyAnalytics />} />
          <Route path="/faculty/notifications" element={<FacultyNotifications />} />
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