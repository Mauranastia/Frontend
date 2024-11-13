import fm1Image from '../tes2.jpg';
import fm2Image from '../tes1.jpg';
import fm3Image from '../tes3.jpg';

const Testi = () => {
  const images = [
    { src: fm1Image},
    { src: fm2Image},
    { src: fm3Image}
  ];

  return (
    <div id='testi' className="testi">
      <h2 className="text-2xl font-bold mb-4">Ulasan</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Testi;