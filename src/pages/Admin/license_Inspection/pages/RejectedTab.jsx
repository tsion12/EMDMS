import React from "react";

const RejectedTab = () => {
  const gridData = [
    {
      id: 1,
      agencyId: "1234567",
      description:
        "A bank statement is typically a digital or physical document that provides a summary of the transactions, balances, and activity in a bank account over a specific period of time.",
    },
    {
      id: 1,
      agencyId: "1234567",
      description:
        "A bank statement is typically a digital or physical document that provides a summary of the transactions, balances, and activity in a bank account over a specific period of time.",
    },
    {
      id: 1,
      agencyId: "1234567",
      description:
        "A bank statement is typically a digital or physical document that provides a summary of the transactions, balances, and activity in a bank account over a specific period of time.",
    },
    {
      id: 1,
      agencyId: "1234567",
      description:
        "A bank statement is typically a digital or physical document that provides a summary of the transactions, balances, and activity in a bank account over a specific period of time.",
    },
    {
      id: 1,
      agencyId: "1234567",
      description:
        "A bank statement is typically a digital or physical document that provides a summary of the transactions, balances, and activity in a bank account over a specific period of time.",
    },
    {
      id: 1,
      agencyId: "1234567",
      description:
        "A bank statement is typically a digital or physical document that provides a summary of the transactions, balances, and activity in a bank account over a specific period of time.",
    },
  ];

  return (
    <div className="flex w-full h-full pb-10">
      <div className="w-full h-[60vh] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {gridData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-10 flex flex-col space-y-3">
            <div className="text-2xl text-[#464255] font-bold">
              Agency ID: {item.agencyId}
            </div>
            <div className="text-[#A3A3A3] text-md max-w-lg tracking-wider">
              {item.description}
            </div>
            <div className="flex w-full justify-end">
              <button className="bg-white px-8 py-2 rounded-lg dark-shadow text-[#CC362F]">
                View Reason
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RejectedTab;
