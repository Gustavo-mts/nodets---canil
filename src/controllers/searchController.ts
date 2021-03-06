import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObjects";
import { Pet } from "../models/pets";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  if (!query.trim()) {
    res.redirect("/");
    return;
  }

  let list = Pet.getFromName(query.trim());

  res.render("pages/page", {
    menu: createMenuObject(""),
    list,
    query,
  });
};
