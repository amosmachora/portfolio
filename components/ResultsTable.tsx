export const ResultsTable = ({
  data,
}: {
  data: { subject: string; grade: string; gpa: number }[];
}) => {
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
          {data.map((dataPoint, i) => (
            <tr key={i}>
              <td className="py-2 px-3 border-b border-gray-200">
                {dataPoint.subject}
              </td>
              <td className="py-2 px-3 border-b border-gray-200">
                {dataPoint.grade}
              </td>
              <td className="py-2 px-3 border-b border-gray-200">
                {dataPoint.gpa.toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
