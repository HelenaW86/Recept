import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "469cy1q2kb0p",
  accessToken: "4PN9T-YAwqBSRHvIuCwyWcd4-W67YNEEex_LpFOWYaI",
});

  // space: process.env.API_SPACE_ID,
  // accessToken: process.env.API_ACCESS_TOKEN,

  // space: "469cy1q2kb0p",
  // accessToken: "4PN9T-YAwqBSRHvIuCwyWcd4-W67YNEEex_LpFOWYaI",
