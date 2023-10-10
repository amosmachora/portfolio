import React from "react";

export const KCSE = () => {
  return (
    <div className="mx-auto w-3/4">
      <table className="w-full shadow-md rounded my-6">
        <thead>
          <tr className="border-b text-left">
            <th className="py-2 px-3 font-bold uppercase text-orange text-sm w-1/2">
              Subject
            </th>
            <th className="py-2 px-3 font-bold uppercase text-orange text-sm w-1/4">
              Grade
            </th>
            <th className="py-2 px-3 font-bold uppercase text-orange text-sm w-1/4">
              GPA
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-3 border-b border-gray-200">Mathematics</td>
            <td className="py-2 px-3 border-b border-gray-200">A</td>
            <td className="py-2 px-3 border-b border-gray-200">4.0</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-200">
              Computer Studies
            </td>
            <td className="py-2 px-3 border-b border-gray-200">A</td>
            <td className="py-2 px-3 border-b border-gray-200">4.0</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-200">Physics</td>
            <td className="py-2 px-3 border-b border-gray-200">A-</td>
            <td className="py-2 px-3 border-b border-gray-200">3.7</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-200">English</td>
            <td className="py-2 px-3 border-b border-gray-200">B+</td>
            <td className="py-2 px-3 border-b border-gray-200">3.3</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-200">Chemistry</td>
            <td className="py-2 px-3 border-b border-gray-200">B</td>
            <td className="py-2 px-3 border-b border-gray-200">3.0</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-200">Geography</td>
            <td className="py-2 px-3 border-b border-gray-200">B-</td>
            <td className="py-2 px-3 border-b border-gray-200">2.7</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-200">Biology</td>
            <td className="py-2 px-3 border-b border-gray-200">C+</td>
            <td className="py-2 px-3 border-b border-gray-200">2.3</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-200">Kiswahili</td>
            <td className="py-2 px-3 border-b border-gray-200">C+</td>
            <td className="py-2 px-3 border-b border-gray-200">2.3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
