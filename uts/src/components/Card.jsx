import fm1Image from '../room.jpg';
import fm2Image from '../lobby.jpg';
import fm3Image from '../facade1.jpg';
import fm4Image from '../resepsionis.jpg';
import fm5Image from '../facade2.jpg';
import fm6Image from '../facade3.jpg';

const Card = ({ title, description, imageUrl }) => {
    return (
    <div id='facilities' className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    </div>
);
};
const CardList = () => {
const concert = [
    {
    title: 'Jenis Kamar',
    description: 'Ini adalah salah satu kamar yang tersedia di villa kami.',
    imageUrl: fm1Image,
},
{
    title: 'Ruang tunggu',
    description: 'Ruangan ini biasanya dipakai untuk meeting atau sekedar berkumpul bersama teman atau saudara.',
    imageUrl: fm2Image,
},
{
    title: 'Tempat bersantai',
    description: 'Kalian bisa bersantai sambil meminum teh atau kopi sambil menunggu proses check in atau check out kamar saat pemesanan.',
    imageUrl: fm3Image,
},
{
    title: 'Resepsionis',
    description: 'Konfirmasi pemesanan villa diresepsionis, bisa juga untuk pemesanan langsung ditempat.',
    imageUrl: fm4Image,
},
{
    title: 'Halaman depan',
    description: 'Terlihat halaman depan villa yang asri dan sejuk ditumbuhi banyak pepohonan yang rindang.',
    imageUrl: fm5Image,
},
{
    title: 'Halaman samping',
    description: 'Terdapat halaman samping yang luas, bisa digunakan untuk parkir kendaraan yang anda gunakan.',
    imageUrl: fm6Image,
},
];

return (
<div id='concert' className="card-container">
    <h2 className="section-title">Jelajahi keindahan villa pakis </h2>
    <div className="card-grid">
        {concert.map((con, index) => (
            <Card
            key={index}
            title={con.title}
            description={con.description}
            imageUrl={con.imageUrl}
            />
            ))}
    </div>
</div>
);
};
export default CardList;