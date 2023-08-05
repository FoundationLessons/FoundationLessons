import { useEffect, useState } from "react";
import "./style.css"
import Pet from "./Pet";
import useBreedList from './useBreedList';
const Animals = ["dog", "cat", "rabbit", "reptile", "bird"];
const breeds = [1, 2];

function SearchParams() {
  const [animal, setAnimal] = useState();
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("USA, Washington");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location"></label>
        <input
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Location"
        />
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        >
          {Animals.map((animal, index) => (
            <option index={index}>{animal}</option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          disabled={breeds.length === 0}
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        >
          {breeds.map((breed, index) => (
            <option key={index}>{breed}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      {pets.map(() => (
        <Pet animal={pets.animal} name={pets.name} breed={pets.breed} key={pets.id}/>
      ))}
    </div>
  );
}

export default SearchParams;
