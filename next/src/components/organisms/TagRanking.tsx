import { data } from "autoprefixer";
import { stat } from "fs";
import React, { useState, useEffect } from "react";
import { fetchTagRanking } from "../../lib/api/fetchData";

const TagRanking: React.FC = () => {
  const [tagData, setTagData] = useState([]);
  const [status, setStatus] = useState(1);

  useEffect(() => {
    (async () => {
      if (status === 1) {
        const data = await fetchTagRanking();
        setTagData(data.whole);
      } else if (status === 2) {
        const data = await fetchTagRanking();
        setTagData(data.annual);
      } else if (status === 3) {
        const data = await fetchTagRanking();
        setTagData(data.monthly);
      }
    })();
  }, [status]);

  return (
    <div className="border h-auto flex-col">
      <div className="flex justify-between">
        <div className="mt-4 ml-4 text-base font-semibold">タグランキング</div>
        <div className="mt-4 mr-4 flex gap-1">
          <button
            onClick={() => {
              setStatus(3);
            }}
            className="no-underline hover:underline"
          >
            年間
          </button>
          |
          <button
            onClick={() => {
              setStatus(2);
            }}
            className=" no-underline hover:underline"
          >
            月間
          </button>
          |
          <button
            onClick={() => {
              setStatus(1);
            }}
            className=" no-underline hover:underline"
          >
            全て
          </button>
        </div>
      </div>

      {tagData &&
        tagData.map((tagData: any, index: number) => {
          return (
            <div key={tagData.id} className="mt-4 mx-2 flex justify-between">
              <div className="p-2 w-1/4 text-center font-bold text-2xl">
                {index + 1}
              </div>
              <button className="border h-8 px-4 my-2 w-auto text-center text-white bg-sky-400 rounded-sm">
                {tagData.skill}
              </button>
              <div className="flex-col w-1/4">
                <div className="text-center font-semibold text-xl">
                  {tagData.tagCount}
                </div>
                <div className="text-center text-xs font-light">posts</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TagRanking;
