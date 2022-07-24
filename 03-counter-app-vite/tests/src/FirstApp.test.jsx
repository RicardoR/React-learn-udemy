import {FirstApp} from "../../src/FirstApp";
import {render} from "@testing-library/react";

describe('FirstApp UT', () => {
    test('should do match with snapshot', () => {
        const developer = {
            name: 'Ricardo',
            surname: 'Rodríguez',
            age: 41
        };
        render(<FirstApp {...developer} />)
    });
});
