const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "v1",
  token: process.env.NEXT_PUBLIC_SANITY_KEY,
  useCdn: true,
});

export default client;
