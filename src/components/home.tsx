import { useState } from "react";
import { dataType } from "../interface";
import dataJson from "../../api.json";

export default function App() {
  const [data, setData] = useState<dataType[]>(dataJson);
  console.log(data);

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="mx-10 grid grid-cols-4 gap-2 mt-4">
          {data.map((data) => (
            <div className="rounded-2xl bg-gray-200 flex flex-col justify-between">
              <div className="h-96 flex">
                <img className="w-full bg-repeat-y max-h-96 object-cover rounded-2xl" src={data.photo} />
              </div>
              <div className="my-2 mx-4 flex gap-4 items-center">
                <img className="w-11 h-11 rounded-full" src={data.profileImg} />
                <div>
                  <p className="font-bold text-base">{data.name}</p>
                  <p className="font-medium text-sm opacity-70">
                    {data.userName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
