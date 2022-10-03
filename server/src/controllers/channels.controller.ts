import { Request, Response } from "express";
import { getChannels } from "../services/channels.service";
import { getChannelMembers } from "../services/channelMembers.service";

export const fetchChannelHandler = async (req: Request, res: Response) => {
  try {
    const channels = await getChannels();
    res.status(200).json({ data: channels });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const fetchChannelMemberHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const channel_id = req.params.channel_id;
    const channelMembers = await getChannelMembers(channel_id);
    res.status(200).json({ data: channelMembers });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
