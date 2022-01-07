import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  align-item: center;
  justify-content: space-between;
    height: 200px;
    border-bottom: 3px solid #F6F7F8;
  .item__img-btn {
    width: 140px;
    height: 95px;
    border-radius: 7px;
  }

  .item__text {
    font-size: 18px;
    color: 262626;
  }

  .left_container,
  .right-container {
    display: flex;
    align-items: center;
    max-width: 450px;
    flex-grow: 1;
    justify-content:space-between;
  }

  .right-container {
  }

  .item__remove-btn {
    color: #FF6875;
    font-size: 20px;    
  }

  .counter__btns {
    display: flex;
    align-items: center;

    & * {
      height: 46px;
      width: 46px;
      background-color: #f6f7f8;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
    }

    & button {
      color: #33a0ff;
      font-weight: bold;
      font-size: 20px;
    }
  }
`;