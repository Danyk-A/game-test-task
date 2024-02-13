import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Field } from "../Field/Field";
import { Selection } from "../Selection/Selection";
import { HoveredList } from "../HoveredList/HoveredList";
import { Square } from "../../types/Square";
import { useAppDispatch } from "../../app/hooks";
import { setIsClicked } from "../../features/isClicked";
import './MainPage.scss';

export const MainPage = () => {
  const [hoveredSquares, setHoveredSquares] = useState<Square[]>([]);
  const [resetField, setResetField] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleMouseEnter = (row: number, col: number) => {
    const currentSquare: Square = { row, col };

    setHoveredSquares(prevSquares => {
      const isAlreadyHovered = prevSquares.some(square => square.row === row && square.col === col);

      if (isAlreadyHovered) {
        return prevSquares.filter(square => !(square.row === row && square.col === col));
      } else {
        return [...prevSquares, currentSquare];
      }
    });
  };

  const handleResetClick = () => {
    setResetField(true);
    setHoveredSquares([]);
  };

  return (
    <main className="main">
      <div className="main__container">
        <div className="main__top">
          <Selection
            setHoveredSquares={setHoveredSquares}
            setResetField={setResetField}
          />
          <Button
            text='start'
            onClick={() => dispatch(setIsClicked(true))}
          />
          <Button
            text="reset"
            onClick={handleResetClick}
          />
        </div>

        <div className="main__wrapper">
          <Field
            handleMouseEnter={handleMouseEnter}
            resetField={resetField}
            setResetField={setResetField}
          />
          <HoveredList
            hoveredSquaresArray={hoveredSquares}
          />
        </div>
      </div>
    </main>
  );
};
