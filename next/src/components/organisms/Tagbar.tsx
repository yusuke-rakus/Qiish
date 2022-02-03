import React, { useEffect } from "react";
import HiddenScrollBar from "../../hooks/useScrollBarStyle";
import getCookie from "../../lib/cookie/handleCookie";
import { useState } from "react";
import { fetchSearchedTag } from "../../lib/api/fetchData";
import axios from "axios";

const TagBar: React.FC = () => {
  const guestId = getCookie();
  const [tagsData, setTagsData] = useState<any>();
  useEffect(() => {
    const tagsData = async () => {
      const res = await axios.get("http://localhost:9090/getTag");
      setTagsData(res.data.tags);
    };
    tagsData();
  }, []);

  const onClickTag = async (tagId: string, guestId: string) => {
    const data = await fetchSearchedTag(tagId, guestId);
  };

  return (
    <HiddenScrollBar className="mx-2 flex overflow-x-auto h-10">
      {tagsData &&
        tagsData.map((keyword: any) => {
          return (
            <button
              onClick={() => onClickTag(keyword.id, guestId)}
              key={keyword.id}
              value={keyword.id}
              className="mx-2 my-1 px-3 text-sm text-white bg-orange-400 rounded-2xl hover:text-orange-500 hover:bg-orange-200"
            >
              {keyword.skill}
            </button>
          );
        })}
    </HiddenScrollBar>
  );
};

export default TagBar;
