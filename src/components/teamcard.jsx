export default function TeamCard({ member, active, onSelect }) {
  const HEADER_HEIGHT = 64;

  return (
    <div
      onClick={() => onSelect?.(member)}
      className={`
        relative w-40 h-64 cursor-pointer
        rounded-full overflow-hidden  
        transition-all duration-300
        ${active ? "scale-105" : "scale-95 opacity-60"}
      `}
      style={{
        backgroundColor: member.theme?.card || "#f7c873",
      }}
    >
      
      <div
        className="absolute top-0 left-0 w-full text-center px-3 pt-4 z-10"
        style={{ height: HEADER_HEIGHT }}
      >
        <p className="text-sm font-semibold text-black">{member.name}</p>
        <p className="text-xs text-black/70">{member.role}</p>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 rounded-full overflow-hidden"
        style={{ top: HEADER_HEIGHT }}
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
