// backend/create-index.js
const elasticClient = require("./elastic-client");

const createIndex = async (indexName) => {
  await elasticClient.indices.create({ index: indexName });
  console.log("Index created");
};

createIndex("posts");
