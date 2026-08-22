import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './components/MainLayout';

// Auth Pages (without Navbar/Sidebar)
import Login from './pages/Login';
import Signup from './pages/Signup';

// Main Application Pages (with Navbar/Sidebar)
import Dashboard from './pages/Dashboard';
import CreateTrip from './pages/CreateTrip';
import MyTrips from './pages/MyTrips';
import ItineraryBuilder from './pages/ItineraryBuilder';
import ItineraryView from './pages/ItineraryView';
import CitySearch from './pages/CitySearch';
import ActivitySearch from './pages/ActivitySearch';
import Budget from './pages/Budget';
import Calendar from './pages/Calendar';
import SharedTrip from './pages/SharedTrip';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes without common layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected/Main routes with common layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/itinerary-builder" element={<ItineraryBuilder />} />
          <Route path="/itinerary" element={<ItineraryView />} />
          <Route path="/cities" element={<CitySearch />} />
          <Route path="/activities" element={<ActivitySearch />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/shared/:tripId" element={<SharedTrip />} />
          <Route path="/profile" element={<Profile />} />

          {/* Catch all unmatched routes */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;