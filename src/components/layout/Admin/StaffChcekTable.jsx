import React from "react";
import Avatar from "../../../assets/svg/placeholder.png";
import Avatar2 from "../../../assets/svg/placeholder2.png";

const data = [
  {
    id: 1,
    avatar: Avatar,
    name: "Libamlak Birhanu Workalem",
    labourId: "246824682468",
    role: "Manager",
    results: "Match",
  },
  {
    id: 2,
    avatar: Avatar2,
    name: "Libamlak Birhanu Workalem",
    labourId: "246824682468",
    role: "staff",
    results: "Not match",
  },
  {
    id: 2,
    avatar: Avatar,
    name: "Libamlak Birhanu Workalem",
    labourId: "246824682468",
    role: "Admin",
    results: "Not match",
  },
  {
    id: 2,
    avatar: Avatar2,
    name: "Libamlak Birhanu Workalem",
    labourId: "246824682468",
    role: "Manager",
    results: "Match",
  },
  {
    id: 2,
    avatar: Avatar,
    name: "Libamlak Birhanu Workalem",
    labourId: "246824682468",
    role: "Staff",
    results: "Not match",
  },
];

const StaffCheckTable = () => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-center text-md text-[#6B6F7B]">
          <th className="px-4 py-2">Avatar</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Labour ID</th>
          <th className="px-4 py-2">Role</th>
          <th className="px-4 py-2">Results</th>
        </tr>
      </thead>
      <tbody className="text-center space-y-9">
        {data.map((row) => (
          <tr key={row.id}>
            <td className=" py-2  pl-10">
              <img
                src={row.avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
            </td>
            <td className="px-4 py-7 font-medium">{row.name}</td>
            <td className="px-4 py-7 text-[#6B6F7B] font-medium">{row.labourId}</td>
            <td className="px-4 py-7 text-[#6B6F7B] font-medium">{row.role}</td>
            <td className="px-4 py-7 text-[#6B6F7B] font-medium">{row.results}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StaffCheckTable;
