import React, { useState } from "react";

const ListItem = ({ show, setShow, index }) => {
  return (
    <div className="shadow border rounded-xl my-6">
      <div className="flex justify-between p-4 bg-gray-300 rounded-xl text-xl">
        <p>1. Does IIT have management quota?</p>
        <button
          onClick={() => setShow(show === index ? false : index)}
          className={`text-2xl font-black transition duration-300 ${
            show===index ? "transform rotate-45" : "rotate-0"
          }`}
        >
          +
        </button>
      </div>
      <div>
        {show === index && (
          <p className="p-4">
            No, there is no management quota at IIT. Students are selected
            either on the basis of their performance in entrance exams or
            through direct admission based on their qualifying marks.
          </p>
        )}
      </div>
    </div>
  );
};

const Faqs = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="my-12 rounded-xl shadow-2xl border">
      <p className="text-blue-550 text-2xl font-black my-8 text-center">
        FAQs About IIT MADRAS
      </p>
      <div className="p-6">
        {[1, 2, 3, 4, 5].map((faq, index) => {
          return (
            <div key={index}>
              <ListItem index={index} show={show} setShow={setShow} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
