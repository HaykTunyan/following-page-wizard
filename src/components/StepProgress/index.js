import React, { useState } from "react";
import { Circle } from "rc-progress";

const StepProgres = ({ count, percent }) => {


  return (
    <>
      <div className="w-16 h-16">
        <Circle
          percent={percent}
          trailWidth={4}
          strokeWidth={8}
          strokeColor="#1E85FE"
          trailColor="#DDE8FF"
        />

        <div className="flex justify-center z-50 relative bottom-12">
          <div className="text-xl font-bold">{count}</div>
          <span className="text-xl  font-bold">/</span>
          <div className="text-xl font-bold ">3</div>
        </div>
      </div>
    </>
  );
};

export default StepProgres;
