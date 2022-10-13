import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { CardInfo, CardState } from '../../../shared/interfaces';


const initialState: CardState = { cards: [] };
export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardInfo>) => {
      action.payload && state.cards.push(action.payload)
    },
    update: (state, action) => {
      state.cards[action.payload.id] = action.payload.data
    },
    remove: (state, action: PayloadAction<string>) => {
      state.cards.filter((card) => card.id !== action.payload)
    }
  }
});

export const { add, update, remove } = cardSlice.actions;

export const selectCount = (state: RootState) => state.cards

export default cardSlice.reducer;