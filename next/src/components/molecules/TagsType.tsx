import React from "react";
import { Select } from "antd";
const { Option, OptGroup } = Select;

type Props = {
  TagType: {
    label: string;
    data: string[];
  };
};

const TagsType: React.FC<Props> = ({ TagType }) => {
  return (
    <div>
      <OptGroup key={TagType.label} label={TagType.label}>
        {TagType.data.map((tag) => {
          return (
            <Option key={tag} value={tag}>
              {tag}
            </Option>
          );
        })}
      </OptGroup>
    </div>
  );
};

export default TagsType;
