import axios from "axios";

const DB_URL = 'https://apidogs.onrender.com'

export const getBreedsList = async () => {
  const breedsList = await axios.get(`${DB_URL}/api/breed/list/all`)
  return breedsList;
}

export const getImagesByBreed = async (breed) => {
  const imgs = await axios.get(`${DB_URL}/api/breed/${breed}/images`);
  return imgs;
}

export const getImagesBySubBreed = async (breed, subBreed) => {
  const imgs = await axios.get(`${DB_URL}/api/breed/${breed}/${subBreed}/images`);
  return imgs;
}
