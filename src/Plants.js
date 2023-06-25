export var plants = [
    {
        "name": "Vine maple",
        "scientific": "Acer circinatum",
        "image": "Vine maple.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Serviceberry",
        "scientific": "Amelanchier alnifolia",
        "image": "Serviceberry.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Choke cherry",
        "scientific": "Prunus virginiana",
        "image": "Choke_cherry.jpg",
        "credit": "https://commons.wikimedia.org/wiki/User:DouglasGoldman"
    },
    {
        "name": "Cascara buckthorn",
        "scientific": "Rhamnus purshiana",
        "image": "Cascara_buckthorn.jfif",
        "credit": "https://en.wikipedia.org/wiki/User:Jrtayloriv"
    },
    {
        "name": "Red-osier dogwood",
        "scientific": "Cornus sericea",
        "image": "Red_osier_dogwood.jpg",
        "credit": "https://commons.wikimedia.org/wiki/User:Ron_Clausen"
    },
    {
        "name": "Beaked hazelnut",
        "scientific": "Corylus cornuta",
        "image": "Beaked_hazelnut.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Tall Oregon grape",
        "scientific": "Mahonia aquifolium",
        "image": "Tall_oregon_grape.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Low Oregon grape",
        "scientific": "Mahonia nervosa"
    },
    {
        "name": "Pacific wax-myrtle",
        "scientific": "Myrica californica",
        "image": "Pacific_wax_myrtle.jpg",
        "credit": "https://commons.wikimedia.org/wiki/User:Kenraiz"
    },
    {
        "name": "Mock orange",
        "scientific": "Philadelphus lewisii",
        "image": "Mock_orange.jpg",
        "credit": "https://commons.wikimedia.org/wiki/User:ThayneT"
    },
    {
        "name": "Red-flowering currant",
        "scientific": "Ribes sanguineum",
        "image": "King_edward_currant.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Black twinberry",
        "scientific": "Lonicera involucrata",
        "image": "Twinberry.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Bald-hip rose",
        "scientific": "Rosa gymnocarpa",
        "image": "Wood_rose.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Blue elderberry",
        "scientific": "Sambucus cerulea", 
        "image": "Blue_elderberry.jpg",
        "credit": "https://commons.wikimedia.org/wiki/User:Kenraiz"
    },
    {
        "name": "Red elderberry",
        "scientific": "Sambucus racemosa",
        "image": "Red_elderberry.jpg",
        "credit": "https://commons.wikimedia.org/wiki/User:Robert_Flogaus-Faust"
    },
    {
        "name": "Snowberry",
        "scientific": "Symphoricarpos albus",
        "image": "Snowberry.jfif",
        "credit": "https://en.wikipedia.org/wiki/User:Jrtayloriv"
    },
    {
        "name": "Goat’s beard",
        "scientific": "Aruncus diocius",
        "image": "Aruncus_dioicus.jpg",
        "credit": "https://commons.wikimedia.org/wiki/User:Robert_Flogaus-Faust"
    },
    {
        "name": "Western skunk cabbage",
        "scientific": "Lysichiton americanus",
        "image": "Skunk_cabbage.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Wild ginger",
        "scientific": "Asarum caudatum",
        "image": "Wild_ginger.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Nodding onion",
        "scientific": "Allium cernuum",
        "image": "Nodding_onion.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Lady fern",
        "scientific": "Athyrium filix-femina",
        "image": "Athyrium_filix-femina.jpg",
        "credit": "https://commons.wikimedia.org/wiki/User:Kenraiz"
    },
    {
        "name": "Deer fern",
        "scientific": "Blechnum spicant",
        "image": "Deer_fern.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Western trillium",
        "scientific": "Trillium ovatum var. ovatum",
        "image": "Trillium.jpg",
        "credit": "https://pixabay.com/users/ghostpotato-37770226/"
    },
    {
        "name": "Slough sedge",
        "scientific": "Carex obnupta"
    },
    {
        "name": "Coastal strawberry",
        "scientific": "Fragaria chiloensis",
        "image": "Fragaria_chiloensis.jpg",
        "credit": "https://commons.wikimedia.org/wiki/User:Nova"
    },
    {
        "name": "Woodland strawberry",
        "scientific": "Fragaria vesca",
        "image": "Fragaria_vesca.jpg",
        "credit": "https://commons.wikimedia.org/wiki/User:LC-de"
    },
    {
        "name": "False lily-of-the-valley",
        "scientific": "Maianthemum dilatatum",
        "image": "Maianthemum_dilatatum.JPG",
        "credit": "https://en.wikipedia.org/wiki/User:Wsiegmund"
    },
    {
        "name": "Sword fern",
        "scientific": "Polystichum munitum"
    },
    {
        "name": "Fringecup",
        "scientific": "Tellima grandiflora",
        "image": "Fringecup.jpg",
        "credit": "https://commons.wikimedia.org/wiki/User:Nova"
    }
];

console.log(plants.map(p => ({ name: p[0], scientific: p[1], image: p[2], credit: p[3] })));
