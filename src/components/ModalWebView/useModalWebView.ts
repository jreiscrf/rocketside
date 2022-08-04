import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUseModal, setCurrentLink } from "../../stores/rockets";

const useHome = () => {
  const { useModal, currentLink } = useSelector((state) => state.rockets);
  const rocket = useSelector((state) => state.rockets.currentRocket);
  const dispatch = useDispatch();

  const handlePress = (url: string) => {
    dispatch(setCurrentLink(url));
    dispatch(setUseModal(!useModal));
  };

  const goBack = () => {
    dispatch(setUseModal(!useModal));
  };

  return {
    handlePress,
    goBack,
    useModal,
    rocket,
    currentLink,
  };
};

export default useHome;
