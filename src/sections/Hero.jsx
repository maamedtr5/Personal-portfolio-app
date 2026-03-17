export const Hero = () => {
    return(
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/*Background Image*/}
      <div className="absolute inset-0 ">
        <img 
        src="/Starry Sky.jpg"
        alt="Starry Sky" className="w-full h-full object-cover opacity-40" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>

      {/*Green Dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style ={{
            backgroundColor:"#023b36",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            
          }}
          />
        ))}
      </div>
    </section>
    );
};