import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Previous from "../../assets/previous.svg";

const Confirme = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/step-one`);
  };
  return (
    <Fragment>
      <div className="w-570  bottom-1 bg-white p-15 rounded-xl ">
        <div className="">
          <div className="inline-flex">
            <img src={Previous} alt="PREVIOUS" />
            <div className="px-2" />
            <button
              type="button"
              className=" relative w-full flex justify-center text-sm font-medium rounded-md text-paleAqua"
              onClick={() => navigate(-1)}
            >
              Previuse
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <h2 className="text-green-400 font-bold text-2xl">
            Successful Process
          </h2>
        </div>

        <div className="pt-24" />
        <div className="">
          <button
            type="button"
            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => goBack()}
          >
            Go Back
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Confirme;
