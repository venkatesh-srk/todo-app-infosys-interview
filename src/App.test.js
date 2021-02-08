import React from "react";
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "./app/store";
import App from "./App";



describe('Test Todo App', () => {
    test('Check for initial todo Item', () => {
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        expect(getByText(/1. First Todo item./i)).toBeInTheDocument();
    });

    test('Add an todo Item', () => {
        const { getByPlaceholderText, getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const textArea = getByPlaceholderText(/Add your todo items/i);
        const TodoButton = getByText(/Add Todo/i);


        fireEvent.change(textArea, { target: { value: 'Second Todo item.' } })
        fireEvent.click(TodoButton);

        expect(textArea.value).toEqual('Second Todo item.');

        expect(getByText(/1. First Todo item./i)).toBeInTheDocument();
        expect(getByText(/2. Second Todo item./i)).toBeInTheDocument();
    });
})
