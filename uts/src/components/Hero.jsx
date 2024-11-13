export function Hero() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>Villa Pakis Residence</h1>
          <p>Nikmati liburan yang tak terlupakan dengan berbagai aktivitas seru di sekitar villa. Villa Pakis juga dapat disewa untuk berbagai keperluan, seperti liburan keluarga, gathering, atau acara spesial lainnya.</p>
        </div>
        <div id="home" className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/herokusuma.jpg`} alt="TEKNIK INFORMATIKA" />
        </div>
      </section>
    );
  };