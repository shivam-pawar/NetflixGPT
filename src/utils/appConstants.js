export const LOGO = "https://www.freepnglogos.com/uploads/netflix-logo-0.png";
export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const DEFAULT_AVATAR =
  "https://avatars.githubusercontent.com/shivam-pawar";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const OPEN_API_SECRET = process.env.REACT_APP_OPENAI_KEY;
