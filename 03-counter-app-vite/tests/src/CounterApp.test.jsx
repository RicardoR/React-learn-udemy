import {render, screen} from "@testing-library/react";
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
});
