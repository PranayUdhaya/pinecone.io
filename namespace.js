import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({ apiKey: '245e416f-829c-45f6-ae58-b047fb9f538b'});

const indexName = "example-index";
const index = pc.index(indexName);

await index.namespace("example-namespace1").upsert([
  {
    "id": "vec1", 
    "values": [1.0, 1.5]
  },
  {
    "id": "vec2", 
    "values": [2.0, 1.0]
  },
  {
    "id": "vec3", 
    "values": [0.1, 3.0]
  }
]);

await index.namespace("example-namespace2").upsert([
  {
    "id": "vec1", 
    "values": [1.0, -2.5]
  },
  {
    "id": "vec2", 
    "values": [3.0, -2.0]
  },
  {
    "id": "vec3", 
    "values": [0.5, -1.5]
  }
]);

const stats = await index.describeIndexStats();
console.log(stats);