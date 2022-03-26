const ACCESS_KEY = "HMFeaCvvd8FxdLbiTD925AUjDkhhXFAaHNUX7iI0K2U";

export const getLatestImages = () => {
  return fetch(getLatestImagesApiUrl());
};

const getLatestImagesApiUrl = () => {
  return `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&page=1&per_page=140`;
//   return `https://source.unsplash.com/random`;

};
