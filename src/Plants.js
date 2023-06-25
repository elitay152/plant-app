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
        "scientific": "Prunus virginiana"
    },
    {
        "name": "Cascara",
        "scientific": "Rhamnus purshiana"
    },
    {
        "name": "Red-osier dogwood",
        "scientific": "Cornus sericea"
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
        "scientific": "Myrica californica"
    },
    {
        "name": "Mock orange",
        "scientific": "Philadelphus lewisii"
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
        "scientific": "Sambucus cerulea"
    },
    {
        "name": "Red elderberry",
        "scientific": "Sambucus racemosa"
    },
    {
        "name": "Snowberry",
        "scientific": "Symphoricarpos albus"
    },
    {
        "name": "Goat’s beard",
        "scientific": "Aruncus diocius"
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
        "name": "Lady fern Athyrium",
        "scientific": "filix-femina"
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
        "scientific": "Fragaria chiloensis"
    },
    {
        "name": "Woodland strawberry",
        "scientific": "Fragaria vesca"
    },
    {
        "name": "False lily-of-the-valley",
        "scientific": "Maianthemum dilatatum"
    },
    {
        "name": "Sword fern",
        "scientific": "Polystichum munitum"
    },
    {
        "name": "Fringecup",
        "scientific": "Tellima grandiflora"
    }
];

console.log(plants.map(p => ({ name: p[0], scientific: p[1], image: p[2], credit: p[3] })));
