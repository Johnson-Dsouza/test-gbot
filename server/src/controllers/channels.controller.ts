import { Request, Response } from "express";
import { getChannels } from "../services/channels.service";

export const fetchChannelHandler = async (req: Request, res: Response) => {
  try {
    const channels = await getChannels();
    res.status(200).json({ data: channels });
  } catch (error) {
    console.log(error);
  }
};
