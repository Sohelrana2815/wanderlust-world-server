
app.get("/user-spots", async (req, res) => {
    const userEmail = req.query.email;
    if (!userEmail) {
      return res.status(400).send({ error: "User email is required" });
    }

    const query = { email: userEmail };
    const cursor = spotCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  });