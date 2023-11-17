import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MemberList } from "./components/pages/MemberList";
import { appUrl } from "./config/url";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appUrl.memberList} element={<MemberList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
