import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <StyledWrapper>
      <label className="search-label">
        <input
          type="text"
          name="text"
          className="input"
          required
          placeholder="Type here..."
        />
        <kbd className="slash-icon">/</kbd>
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xlink="http://www.w3.org/1999/xlink"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 56.966 56.966"
          style={{ enableBackground: "new 0 0 512 512" }}
          space="preserve"
        >
          <g>
            <path
              d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"
              fill="currentColor"
              data-original="#000000"
              className=""
            />
          </g>
        </svg>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .search-label {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  border: 1px solid transparent;
  border-radius: 12px;
  overflow: hidden;
  background: #3D3D3D;
  padding: 9px;
  cursor: text;
}

.search-label:hover {
  border-color: gray;
}

.search-label:focus-within {
  background: #464646;
  border-color: gray;
}

.search-label input {
  outline: none;
  width: 100%;
  border: none;
  background: none;
  color: rgb(162, 162, 162);
}

.search-label input:focus+.slash-icon,
.search-label input:valid+.slash-icon {
  display: none;
}

.search-label input:valid~.search-icon {
  display: block;
}

.search-label input:valid {
  width: calc(100% - 22px);
  transform: translateX(20px);
}

.search-label svg,
.slash-icon {
  position: absolute;
  color: #7e7e7e;
}

.search-icon {
  display: none;
  width: 12px;
  height: auto;
}

.slash-icon {
  right: 7px;
  border: 1px solid #393838;
  background: linear-gradient(-225deg, #343434, #6d6d6d);
  border-radius: 3px;
  text-align: center;
  box-shadow: inset 0 -2px 0 0 #3f3f3f, inset 0 0 1px 1px rgb(94, 93, 93), 0 1px 2px 1px rgba(28, 28, 29, 0.4);
  cursor: pointer;
  font-size: 12px;
  width: 15px;
}

.slash-icon:active {
  box-shadow: inset 0 1px 0 0 #3f3f3f, inset 0 0 1px 1px rgb(94, 93, 93), 0 1px 2px 0 rgba(28, 28, 29, 0.4);
  text-shadow: 0 1px 0 #7e7e7e;
  color: transparent;
}
`;

export default Input;
