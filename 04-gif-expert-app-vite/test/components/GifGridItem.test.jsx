import {render} from "@testing-library/react";
import {GifGridItem} from "../../src/components";

describe('GifGridItem UT', () => {
    const {container} = render(<GifGridItem url='url' title='title'/>);

    test('should do match with snapshot', () => {
        expect(container).toMatchSnapshot();
   });
});
