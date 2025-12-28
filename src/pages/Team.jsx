import { useMemo, useState, useRef } from "react";
import SwipeRow from "../components/SwipeRow";
import ProfileModal from "../components/ProfileModal";
import { team } from "../data/teamData";
import "../App.css";


function App() {
  const row1 = team.filter((_, i) => i % 2 === 0);
  const row2 = team.filter((_, i) => i % 2 === 1);

  const [bgTheme, setBgTheme] = useState(
    "from-[#0f0f0f] via-[#141414] to-[#050505]"
  );

  const [selectedMember, setSelectedMember] = useState(null);

  const handleActiveChange = (member) => {
    if (member?.theme?.bg) {
      setBgTheme(member.theme.bg);
    }
  };

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <div
      className={`
        min-h-screen
        bg-gradient-to-br ${bgTheme}
        transition-colors duration-700 ease-out
        flex items-center justify-center
        pt-24
      `}
    >
      <div className="w-full max-w-sm">
        <SwipeRow
          data={row1}
          onActiveChange={handleActiveChange}
          onCardClick={handleCardClick}
        />

        <SwipeRow
          data={row2}
          onActiveChange={handleActiveChange}
          onCardClick={handleCardClick}
        />
      </div>

      <ProfileModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}

export default App;
