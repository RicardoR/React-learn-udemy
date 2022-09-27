import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";
import {renderHook, waitFor} from "@testing-library/react";

describe('useFetchGifs UT', () => {
    test('should return the initial status', () => {
        const {result} = renderHook(() => useFetchGifs('Dragon ball'))
        const {images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an images array and isLoading as false', async () => {
        const {result} = renderHook(() => useFetchGifs('Dragon ball'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;
        expect(images.length).toBe(10);
        expect(isLoading).toBeFalsy();
    });
});
