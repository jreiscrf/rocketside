import React from "react";
import { AntDesign } from "@expo/vector-icons";
import usePagination from "./usePagination";
import * as S from "./styles";

const Pagination = () => {
  const { totalPage, page, handleNextPage, handlePrevPage } = usePagination();

  const arrowLeft = React.useMemo(() => {
    if (page <= 1) {
      return;
    }
    return <AntDesign name="left" size={28} color="#142e52" />;
  }, [page]);

  const arrowRight = React.useMemo(() => {
    if (page == totalPage) {
      return;
    }
    return <AntDesign name="right" size={28} color="#142e52" />;
  }, [page, totalPage]);

  return (
    <S.Container>
      <S.Touchable onPress={handlePrevPage}>{arrowLeft}</S.Touchable>
      <S.ViewCount>
        <S.TextCount>
          {page} / {totalPage}
        </S.TextCount>
      </S.ViewCount>

      <S.Touchable onPress={handleNextPage}>{arrowRight}</S.Touchable>
    </S.Container>
  );
};

export default Pagination;
