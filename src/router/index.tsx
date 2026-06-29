// src/router/index.tsx
import { Route, Routes } from 'react-router-dom'
import {
  Activate,
  AdminGuard,
  AppShell,
  Attendance,
  CalendarPage,
  Certificates,
  CertDownload,
  Dashboard,
  GroupReport,
  InstructorDashboard,
  InstructorPayout,
  L1Survey,
  L2Test,
  L3Survey,
  NewTrainingWizard,
  OrgPayout,
  Overview,
  Resources,
  Sessions,
  SignIn,
  Students,
  SurveyDefinition,
  Team,
  Tests,
  TrainingDetail,
  TrainingList,
  TrainingPayout,
  TrainingSurveys,
} from '../pages/Placeholders'

export function AppRoutes() {
  return (
    <Routes>
      {/* Auth — no shell */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/activate" element={<Activate />} />

      {/* Student tokenized pages — no shell */}
      <Route path="/s/survey/l1/:token" element={<L1Survey />} />
      <Route path="/s/survey/l3/:token" element={<L3Survey />} />
      <Route path="/s/test/:token" element={<L2Test />} />
      <Route path="/s/cert/:token" element={<CertDownload />} />

      {/* App shell — Admin & Delivery Manager */}
      <Route element={<AppShell roles={['admin', 'dm']} />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/trainings" element={<TrainingList />} />
        <Route path="/trainings/new" element={<NewTrainingWizard />} />
        <Route path="/trainings/:id/*" element={<TrainingDetail />}>
          <Route index element={<Overview />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="students" element={<Students />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="surveys" element={<TrainingSurveys />} />
          <Route path="group-report" element={<GroupReport />} />
          <Route path="payout" element={<TrainingPayout />} />
        </Route>
        <Route path="/payout" element={<OrgPayout />} />
        {/* Admin only */}
        <Route path="/surveys" element={<AdminGuard><SurveyDefinition /></AdminGuard>} />
        <Route path="/team" element={<AdminGuard><Team /></AdminGuard>} />
      </Route>

      {/* App shell — Instructor */}
      <Route element={<AppShell roles={['instructor']} />}>
        <Route path="/i/dashboard" element={<InstructorDashboard />} />
        <Route path="/i/calendar" element={<CalendarPage />} />
        <Route path="/i/trainings" element={<TrainingList />} />
        <Route path="/i/trainings/:id/*" element={<TrainingDetail />}>
          <Route path="sessions" element={<Sessions />} />
          <Route path="students" element={<Students />} />
          <Route path="attendance" element={<Attendance editable />} />
          <Route path="tests" element={<Tests />} />
          <Route path="resources" element={<Resources />} />
        </Route>
        <Route path="/i/payout" element={<InstructorPayout />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes