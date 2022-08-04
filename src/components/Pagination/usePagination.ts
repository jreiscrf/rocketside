import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPages, reducePages } from "../../stores/rockets";

const useSignup = () => {
  const dispatch = useDispatch();
  const { totalPage, page } = useSelector((state) => state.rockets);

  const handleNextPage = () => {
    dispatch(addPages());
  };
  const handlePrevPage = () => {
    dispatch(reducePages());
  };

  return {
    page,
    totalPage,
    handleNextPage,
    handlePrevPage,
  };
};

export default useSignup;
