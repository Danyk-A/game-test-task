import { useEffect } from "react";
import { getModes } from "./helpers/fetchModes";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setModes } from "./features/modes";

import './styles/reset.scss';
import './styles/normalize.scss';
import './App.scss';
import { MainPage } from "./components/MainPage/MainPage";

export const App = () => {
  const isClicked = useAppSelector(store => store.isClicked.isClicked);
  const dispatch = useAppDispatch();

  const loadModels = async () => {
    try {
      const modelsFromServer = await getModes();

      dispatch(setModes(modelsFromServer));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    loadModels();
  }, []);

  return (
    <div className="page">
      <div className="page__container">
        {!isClicked && (
          <p className="page__text">
            To start the app <strong>choose the mode</strong> and <strong>click the "start" button</strong>
          </p>
        )}

        <MainPage />
      </div>
    </div>
  );
}