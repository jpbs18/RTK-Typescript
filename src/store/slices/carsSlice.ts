import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface Car {
    id?: string,
    model: string,
    price: number
}

interface CarsState {
    cars: Car[],
    searchTerm: string
}

const initialState: CarsState = {
    cars: [],
    searchTerm: ""
}

export const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        addCar: (state, action: PayloadAction<Car>) => {
            state.cars.push({
                id: nanoid(),
                ...action.payload
            })
        },

        removeCar: (state, action: PayloadAction<string>) => {
            state.cars = state.cars.filter(car => car.id !== action.payload)
        },

        searchCar: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload
        }
    }
})


export type { Car }
export const carsReducer = carsSlice.reducer
export const { addCar, removeCar, searchCar } = carsSlice.actions
export const selectCars = (state: RootState) => state.cars