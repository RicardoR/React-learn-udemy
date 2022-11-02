import {renderHook} from "@testing-library/react";
import {useCounter} from "../../src/hooks/index.js";

describe('test in useCounter', () => {
    test('should return the default values', () => {
        const {} = renderHook(() => useCounter());
    });
});
