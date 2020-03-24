import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  const message = "Hello, world";
  return res.json({ message });
});

export default routes;
