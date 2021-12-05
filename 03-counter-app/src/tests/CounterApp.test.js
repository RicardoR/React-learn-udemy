import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('<CounterApp />', () => {
    let wrapper;
    let increaseBtn;
    let decreaseBtn;
    let resetBtn;

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
        increaseBtn = wrapper.find('#increaseBtn');
        decreaseBtn = wrapper.find('#decreaseBtn');
        resetBtn = wrapper.find('#resetBtn');
    });

    test('should display 5 as default value', () => {
        expect(wrapper.find('p').text().trim()).toBe('5');
    });

    test('should display the value passed to the component', () => {
        const ten = 10;
        const wrapperNew = shallow(<CounterApp value={ten} />);

        expect(wrapperNew).toMatchSnapshot();
        expect(wrapperNew.find('p').text().trim()).toBe(ten.toString());
    });

    test('should increase the value when increaseBtn is clicked', () => {
        increaseBtn.simulate('click');
        expect(wrapper.find('p').text().trim()).toBe('6');
    });
    
    test('should decrease the value when decreaseBtn is clicked', () => {
        decreaseBtn.simulate('click');
        expect(wrapper.find('p').text().trim()).toBe('4');
    });

    test('should reset de value when resetBtn is clicked', () => {
        increaseBtn.simulate('click');
        expect(wrapper.find('p').text().trim()).toBe('6');
        resetBtn.simulate('click');
        expect(wrapper.find('p').text().trim()).toBe('5');
    });
});