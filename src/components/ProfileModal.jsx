export default function ProfileModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-sm rounded-3xl overflow-hidden bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/70 text-white text-lg"
        >
          ✕
        </button>

        <img
          src={member.img}
          alt={member.name}
          className="w-full h-64 object-cover"
        />

=        <div className="p-5 text-black">
          <h2 className="text-lg font-semibold">{member.name}</h2>
          <p className="text-sm text-black/60">{member.role}</p>

          <p className="mt-4 text-sm leading-relaxed text-black/80">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
