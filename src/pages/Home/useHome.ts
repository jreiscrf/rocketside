import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRockets, setTotalPage } from "../../stores/rockets";
import { setAuthenticated } from "../../stores/auth";
import api from "../../services/api";

const useHome = () => {
  const dispatch = useDispatch();
  const { rockets, filter, page } = useSelector((state) => state.rockets);

  useEffect(() => {
    api
      .post("/query", {
        options: {
          page: page,
        },
      })
      .then((response) => {
        dispatch(setRockets(response.data.docs));
        dispatch(setTotalPage(response.data.totalPages));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const filtered = React.useMemo(() => {
    let data = rockets;
    return data.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, rockets]);

  const navigateToLogin = React.useCallback(() => {
    dispatch(setAuthenticated(false));
  }, []);

  return {
    rockets,
    filtered,
    filter,
    dispatch,
    navigateToLogin,
  };
};

export default useHome;
