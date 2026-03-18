// Simple seeded random function for deterministic randomness
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

function FloatingDot({ index }) {
  const style = {
    backgroundColor: "#0aefdf",
    left: `${seededRandom(index * 1.1) * 100}%`,
    top: `${seededRandom(index * 2.2) * 100}%`,
    animation: `slow-drift ${15 + seededRandom(index * 3.3) * 20}s ease-in-out infinite`,
    animationDelay: `${seededRandom(index * 4.4) * 5}s`,
  };

  return (
    <div
      className="absolute w-1.5 h-1.5 rounded-full opacity-60"
      style={style}
    />
  );
}

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/Starry Sky.jpg"
          alt="Starry Sky"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {Array.from({ length: 30 }).map((_, index) => (
          <FloatingDot key={index} index={index} />
        ))}
      </div>
    </section>
  );
};
