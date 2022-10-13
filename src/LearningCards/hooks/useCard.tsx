
import { useDispatch } from "react-redux";
import { useId, useState } from "react";

import { add } from "../../store/learningCards/cards/cardSlice";

export const useCard = () => {
  const cardId = useId()
  const dispatch = useDispatch()
  const [cardInfo, setCardInfo] = useState({
    id: '',
    title: '',
    description: '',
    category: ''
  });


  const updateCard = (card: any) => {
    setCardInfo({ ...cardInfo, ...card })
  }

  const createCard = () => {
    const newCard = {
      ...cardInfo,
      id: cardId
    };

    dispatch(add(newCard))
  }

  return {
    createCard,
    cardInfo,
    updateCard
  }
}