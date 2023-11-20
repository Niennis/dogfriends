import axios from "axios";

const DB_URL = `https://apidogs.onrender.com`

export const getBreedsList = async (DB_URL) => {
  const breedsList = await axios.get(`https://apidogs.onrender.com/api/breed/list/all`)
  return breedsList;
}

export const getImagesByBreed = async (breed) => {
  const imgs = await axios.get(`https://apidogs.onrender.com/api/breed/${breed}/images`);
  return imgs;
}

export const getImagesBySubBreed = async (breed, subBreed) => {
  const imgs = await axios.get(`https://apidogs.onrender.com/api/breed/${breed}/${subBreed}/images`);
  return imgs;
}
