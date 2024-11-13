import gambaar from "../logokusuma.png"

const Logo = {
    nama: "",
    imageUrl: "",
    imageSize: 200,
};

function Header() {
    return(
        <div className="header">
            <div className="header-logo">
                <img 
                className="App-logo"
                src={gambaar}
                alt={"logo" + Logo.nama}
                style={{width: Logo.imageSize, height: Logo.imageSize}}
                />
                <h3>{Logo.nama}</h3>
            </div>
            <div>
                <h1>VILLA PAKIS RESIDENCE </h1>
                <h2>Homestay Banyuwangi</h2>
            </div>
        </div>
    );
}

export default Header;