import clientPromise from "../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  // const isConnected = await client.isConnected();
  const db = client.db();
  // console.log(db);

  if (req.method === "GET") {
    db ? res.send({ connected: true }) : res.send({ connected: false });
  } else {
  }
};
