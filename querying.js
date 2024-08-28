import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({ apiKey: '245e416f-829c-45f6-ae58-b047fb9f538b'});

const indexName = "example-index";
const index = pc.index(indexName);

const queryResponse1 = await index.namespace("example-namespace1").query({
    topK: 3,
    vector: [1.0, 1.5],
    includeValues: true
  });
  
  const queryResponse2 = await index.namespace("example-namespace2").query({
    topK: 3,
    vector: [1.0, -2.5],
    includeValues: true
  });
  
  console.log('Query Response 1:', JSON.stringify(queryResponse1, null, 2));
  console.log('Query Response 2:', JSON.stringify(queryResponse2, null, 2));