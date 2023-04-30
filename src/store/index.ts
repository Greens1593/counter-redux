import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  counter: number;
}

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 } as CounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    addBy(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    subtractBy(state, action: PayloadAction<number>) {
      state.counter -= action.payload;
    },
  },
});

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
