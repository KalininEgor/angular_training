export const createRandomDelay = (minSec: number, maxSec: number): number => {
    return Math.floor(minSec + Math.random() * maxSec) * 1000;
}