import styled from "styled-components";

export const HiddenScrollBar = styled.div(() => ({
  "::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
}));

export default HiddenScrollBar;
