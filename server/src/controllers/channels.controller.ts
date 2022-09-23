import { Request, Response } from "express";
const { channels } = require("../services/channels.service");

const fetchChannelHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).send({ data: channels });
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchChannelHandler;
