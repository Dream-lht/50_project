import styled from "styled-components";

const ProgressSetpsBox = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  .progress-container {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    .nodeItem {
      width: 40px;
      height: 40px;
      line-height: 32px;
      border-radius: 50%;
      background-color: #fff;
    }

    .line {
      position: absolute;
      top: 50%;
      left: 0;
      height: 4px;
      
      background-color: skyblue;
      z-index: -1;
    }
    .active {
      border-color: skyblue;
    }
  }
  .progress-container::before {
    position: absolute;
    top: 50%;
    left: 0;
    content: "";
    width: 100%;
    height: 4px;
    background-color: #ccc;
    z-index: -1;
  }

  .button {
    width: 75px;
    height: 35px;
    border-radius: 5px;
    background-color: skyblue;
    border: 1px solid skyblue;
  }
  .disable {
    background-color: #ccc;
    border: 1px solid #ccc;
  }
  .disable:hover {
    cursor: not-allowed;
  }
`;

export { ProgressSetpsBox };
