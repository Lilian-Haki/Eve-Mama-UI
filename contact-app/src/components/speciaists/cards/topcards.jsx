import React from "react";

function TopCards() {
  return (
    <div className="flex gap-8">
      <div className="h-[120px] w-[300px] shadow rounded-[20px]">
        <h4>Pending Appointments</h4>
        <p>Total: 2</p>
      </div>
      <div className="h-[120px] w-[300px] shadow rounded-[20px]">
        <h4>Completed Appointments</h4>
        <p>Total: 2</p>
      </div>
      <div className="h-[120px] w-[300px] shadow rounded-[20px]">
        <h4>Pending Payments</h4>
        <p>Total: 2</p>
      </div>
      <div className="h-[120px] w-[300px] shadow rounded-[20px]">
        <h4>Amount Spent</h4>
        <p>Total: ksh 10,000</p>
      </div>
    </div>
  );
}
export default TopCards;
