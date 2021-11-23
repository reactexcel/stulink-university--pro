import React from "react";
import CollegeExamCard from "./CollegeExamCard";

const CollegesExams = ({ collegeData }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center">
        <p className="text-blue-550 font-medium text-lg">FIND YOUR BEST</p>
        <p className="text-black font-semibold text-3xl font-Poppins mt-2">
          Colleges {"&"} Exams
        </p>
        <div className="mt-10">
          <button className="bg-blue-550 text-white text-lg font-semibold px-32 py-4 font-Poppins">
            Colleges
          </button>
          <button className="bg-white text-black text-lg font-semibold px-32 py-4 font-Poppins shadow-lg">
            Exams
          </button>
        </div>
        <div className="grid grid-cols-5 mt-20 gap-10">
          {collegeData && collegeData?.data && collegeData?.data?.map(
            (value, index) => {
              return <div key={index}><CollegeExamCard data={value} /></div>;
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegesExams;
