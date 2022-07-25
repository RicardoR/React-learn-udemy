import {fireEvent, render, screen} from "@testing-library/react";
import {CounterApp} from "../../src/CounterApp";

describe('CounterApp Ut', () => {
    const initialValue = 100;
    const {container} = render(<CounterApp value={initialValue}/>);

   test('should do match with the snapshot', () => {
       expect(container).toMatchSnapshot();
   });

   test('should display the initial value', async() => {
       await render(<CounterApp value={initialValue}/>);
       expect(screen.getByTestId('test-counter').innerHTML).toContain(`${initialValue}`);
   });

   test('should increment the value in 1 with +1 button', async () => {
       let currentValue = initialValue + 1;
       await render(<CounterApp value={initialValue}/>);
       fireEvent.click(screen.getByText('+1'));
       expect(screen.getByTestId('test-counter').innerHTML).toContain(`${currentValue}`);
   });

   test('should increment the value in 2 with +2 button', async () => {
       let currentValue = initialValue + 2;
       await render(<CounterApp value={initialValue}/>);
       fireEvent.click(screen.getByText('+2'));
       expect(screen.getByTestId('test-counter').innerHTML).toContain(`${currentValue}`);
   });

   test('should decrement the value in 1 with -1 button', async () => {
       let currentValue = initialValue - 1;
       await render(<CounterApp value={initialValue}/>);
       fireEvent.click(screen.getByText('-1'));
       expect(screen.getByTestId('test-counter').innerHTML).toContain(`${currentValue}`);
   });

   test('should decrement the value in 2 with -2 button', async () => {
       let currentValue = initialValue - 2;
       await render(<CounterApp value={initialValue}/>);
       fireEvent.click(screen.getByText('-2'));
       expect(screen.getByTestId('test-counter').innerHTML).toContain(`${currentValue}`);
   });

   test('should reset the value when click on reset', async () => {
       await render(<CounterApp value={initialValue}/>);
       fireEvent.click(screen.getByText('+2'));
       expect(screen.getByTestId('test-counter').innerHTML).toContain(`${initialValue + 2}`);
       fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
       expect(screen.getByTestId('test-counter').innerHTML).toContain(`${initialValue}`);
   });
});
