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

    const expectedTextByData = `${ramones.band} - ${ramones.origin} - Punk!`;

    // Following code works whit import '@testing-library/jest-dom/extend-expect';
    // const wrapper = render(<RamonesApp ramones={ramones} />);
    // expect(wrapper.getByText(title)).toBeInTheDocument();
    // expect(wrapper.getByText(expectedTextByData)).toBeInTheDocument();

    const wrapper = shallow(<RamonesApp ramones={ramones} />);
    expect(wrapper.find('h1').text()).toBe(title);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').at(4).text()).toBe(expectedTextByData);
    console.log(wrapper.find('p').last().text());
    console.log(wrapper.find('p').at(4).text());
  });
});
