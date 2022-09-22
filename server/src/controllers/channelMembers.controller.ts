import { Request, Response } from "express";
const { channelMembers } = require("../services/getChannelMembers");

const fetchChannelMemberHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).send({ data: channelMembers });
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchChannelMemberHandler;
