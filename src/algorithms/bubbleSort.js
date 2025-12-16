export function bubbleSortSteps(arr) {
    const steps = [];
    const a = arr.length;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            steps.push({
                data: [...a],
                highlight: [j, j + 1],
                message: `Comparing ${j} and ${j + 1}`,
            });

            if (a[j] > a[j + 1]) {
                // Swap
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                steps.push({
                    data: [...a],
                    highlight: [j, j + 1],
                    message: `Swapped ${j} and ${j + 1}`,
                });
            }
        }
    }
    return steps;
}