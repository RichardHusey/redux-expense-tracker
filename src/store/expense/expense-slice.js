import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [
      { name: "Apple", price: 1 },
      { name: "Laptop", price: 100 },
    ],
  },
  reducers: {
    addExpenseAction: (currentSlice) => {
      console.log("addExpenseAction");
      currentSlice.expenseList.push({ name: "Cherry", price: 100 });
    },
  },
});

export const { addExpenseAction } = expenseSlice.actions;
