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

  it("another test", async () => {
    // test one value
    const coll = db.collection("test_coll");
    const result = await coll.insertMany([
      { foo: "bar", val: 3 },
      { foo: "baz", val: 4 },
    ]);
    expect(result.acknowledged).toBeTruthy();
    const query = { foo: "bar" };
    const foundDoc = await coll.findOne(query);
    expect(foundDoc).toBeTruthy();
    expect(foundDoc!["val"]).toBe(3);

    // test another value
    const otherQuery = { foo: "baz" };
    const otherFoundDoc = await coll.findOne(otherQuery);
    expect(otherFoundDoc).toBeTruthy();
    expect(otherFoundDoc!["val"]).toBe(4);
  });
});
