import { plants } from './Plants.js';
import './App.css';

//default plant pic
const plant_pic = {image:"plant-576852_1280.png", credit:"https://pixabay.com/users/openclipart-vectors-30363/"}

function App() {
  return (
    <div className="App">

      <table class="center">
        <tr>
          <th class="table_title" colSpan={3}>Native Plants of the Pacific Northwest</th>
        </tr>
        <tr>
          <th>Common name</th>
          <th>Scientific name</th>
          <th>Photo</th>
        </tr>
        {plants.map(p => {
          const userlink = p.credit || plant_pic.credit;
          const username = userlink.match(/users\/(.+)-\d+\/$/);

          return <tr>
            <td>{p.name}</td>
            <td class="s">{p.scientific}</td>
            <td><img src={p.image || plant_pic.image} /> <br />
              Image source: <a href={userlink}>{username[1]==="ghostpotato"?"Author":username[1]}</a> </td>
          </tr>
        })}
      </table>
    </div>
  );
}

export default App;
