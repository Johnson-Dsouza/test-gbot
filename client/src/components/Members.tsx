import React, { useEffect } from "react";
import { useState } from "react";
import DropdownIcon from "./DropdownIcon";
import axios from "axios";

const Members = () => {
  const [channelMembers, setChannelMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/channelMembers").then((data: any) => {
      setChannelMembers(channelMembers);
    });
  });
  const members = ["Member One", "Member Two", "Member Three"];
  const [displayMembers, setDisplayMembers] = useState(false);

  const handleDisplay = () => {
    setDisplayMembers(!displayMembers);
  };
  return (
    <div className="p-4">
      <div
        className="border-solid border-2 border-gray-300 p-3 flex justify-between content-center hover:cursor-pointer hover:border-black"
        onClick={handleDisplay}>
        <strong>Members</strong>
        <DropdownIcon />
      </div>

      <ul
        className={
          displayMembers
            ? "flex flex-col border-2 border-gray-300 mt-2 absolute w-64"
            : "hidden"
        }>
        {members.map((member) => (
          <li className="list-none p-2 bg-white hover:bg-blue-300 border-b border-gray-500">
            <label htmlFor={member} className="flex justify-between">
              <span className="mr-2">{member}</span>
              <input type="checkbox" id={member} value={member} />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;
