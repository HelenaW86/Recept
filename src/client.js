import * as contentful from "contentful";
// require("dotenv").config();
export const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

  // space: process.env.API_SPACE_ID,
  // accessToken: process.env.REACT_APP_API_ACCESS_TOKEN,

  // space: "469cy1q2kb0p",
  // accessToken: "4PN9T-YAwqBSRHvIuCwyWcd4-W67YNEEex_LpFOWYaI",
