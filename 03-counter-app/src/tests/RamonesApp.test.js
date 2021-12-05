import React from 'react';
import { render } from '@testing-library/react';
import RamonesApp from '../RamonesApp';

describe('<RamonesApp /> UT', () => {
  test('Should display Hey Ho! Lets go! in the title', () => {
    const title = "Hey Ho! Let's go!";
    const ramones = {
      band: 'Los Chichos!!',
      origin: 'Los Angeles, California',
    };
    const expectedTextByData = `${ramones.band} - ${ramones.origin} - Punk!`;
      
    const wrapper = render(<RamonesApp ramones={ramones} />);
    expect(wrapper.getByText(title)).toBeInTheDocument();
    expect(wrapper.getByText(expectedTextByData)).toBeInTheDocument();  
  });
});
