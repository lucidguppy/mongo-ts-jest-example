import { Db } from "mongodb";
import { client } from "../../test/setupFile";
describe("insert", () => {
  let db: Db;

  beforeEach(() => {
    db = client.db("TEST");
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
