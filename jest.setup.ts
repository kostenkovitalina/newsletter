import '@testing-library/jest-dom';

global.fetch = jest.fn()
/* global AbortSignal */

global.AbortSignal = class {
    static timeout(ms: number) {
        return new AbortSignal();
    }
} as typeof AbortSignal;