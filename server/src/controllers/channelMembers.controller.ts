import { Request, Response } from "express";
import { getChannelMembers } from "../services/channelMembers.service";

export const fetchChannelMemberHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const channel_id = req.params.channel_id;
    const channelMembers = await getChannelMembers(channel_id);
    res.status(200).json({ data: channelMembers });
  } catch (error) {
    console.log(error);
  }
};
