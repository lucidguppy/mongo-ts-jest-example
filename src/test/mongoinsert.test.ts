import { Db, MongoClient } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";
describe("insert", () => {
  let mongod: MongoMemoryServer;
  let uri: string;
  let db: Db;
  let client: MongoClient;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    uri = mongod.getUri();
    client = await MongoClient.connect(uri);
    db = client.db("TEST");
  });

  afterAll(async () => {
    if (client) {
      await client.close();
    }
    if (mongod) {
      await mongod.stop();
    }
  });

  it("should insert a doc into collection", async () => {
    const coll = db.collection("test_coll");
    const result = await coll.insertOne({ foo: "bar", val: 3 });
    expect(result.acknowledged).toBeTruthy();
    const query = { foo: "bar" };
    const foundDoc = await coll.findOne(query);
    expect(foundDoc).toBeTruthy();
    expect(foundDoc!["val"]).toBe(3);
  });
});
