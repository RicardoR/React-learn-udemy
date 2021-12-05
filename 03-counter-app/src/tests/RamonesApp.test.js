// import { render } from '@testing-library/react';

import React from 'react';
import RamonesApp from '../RamonesApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('<RamonesApp /> UT', () => {
  test('Should display Hey Ho! Lets go! in the title', () => {
    const title = "Hey Ho! Let's go!";
    const ramones = {
      band: 'Los Chichos!!',
      origin: 'Los Angeles, California',
    };

    // Following code works whit import '@testing-library/jest-dom/extend-expect';
    // const wrapper = render(<RamonesApp ramones={ramones} />);
    // expect(wrapper.getByText(title)).toBeInTheDocument();
    // expect(wrapper.getByText(expectedTextByData)).toBeInTheDocument();

    const wrapper = shallow(<RamonesApp ramones={ramones} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text()).toBe(title);
  });
  
  test('Should display the song and ramones data in the paragraphs', () => {
    const ramones = {
      band: 'Ramones!!',
      origin: 'Los Angeles, California',
    };

    const expectedTextByData = `${ramones.band} - ${ramones.origin} - Punk!`;
    const wrapper = shallow(<RamonesApp ramones={ramones} />);
    
    expect(wrapper.find('p').at(0).text()).toBe(
      "They're forming in straight line"
    );
    expect(wrapper.find('p').at(1).text()).toBe(
      "They're going through a tight wind"
    );
    expect(wrapper.find('p').last().text()).toBe(expectedTextByData);
  });
});
