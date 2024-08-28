import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({ apiKey: '245e416f-829c-45f6-ae58-b047fb9f538b'});

const indexName = "example-index";

await pc.deleteIndex(indexName);