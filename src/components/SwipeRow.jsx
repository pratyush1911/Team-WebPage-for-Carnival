import { useRef, useState, useEffect } from "react";
import TeamCard from "./TeamCard";

const CARD_WIDTH = 160; // px
const CARD_GAP = 24; // px
const MIN_SWIPE = 50;

export default function SwipeRow({ data, onActiveChange, onCardClick }) {
  const containerRef = useRef(null);
  const startX = useRef(0);
  const isSwiping = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isSwiping.current = false;
  };

  const onTouchMove = (e) => {
    if (Math.abs(startX.current - e.touches[0].clientX) > 10) {
      isSwiping.current = true;
    }
  };

  const onTouchEnd = (e) => {
    if (!isSwiping.current) return;

    const distance = startX.current - e.changedTouches[0].clientX;

    if (distance > MIN_SWIPE && activeIndex < data.length - 1) {
      const next = activeIndex + 1;
      setActiveIndex(next);
      onActiveChange?.(data[next]);
    }

    if (distance < -MIN_SWIPE && activeIndex > 0) {
      const prev = activeIndex - 1;
      setActiveIndex(prev);
      onActiveChange?.(data[prev]);
    }
  };

  const offset =
    -activeIndex * (CARD_WIDTH + CARD_GAP) +
    (containerWidth / 2 - CARD_WIDTH / 2);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden mb-10"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(${offset}px)`,
          gap: `${CARD_GAP}px`,
        }}
      >
        {data.map((member, index) => (
          <div
            key={member.id}
            style={{ width: CARD_WIDTH }}
            className={`flex justify-center transition-opacity duration-300 ${
              index === activeIndex ? "opacity-100" : "opacity-40"
            }`}
          >
            <TeamCard
              member={member}
              active={index === activeIndex}
              onSelect={onCardClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
