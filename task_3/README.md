# Task 3: Web Performance Optimization via Web Worker

This project demonstrates how to improve web performance by offloading heavy computation to a Web Worker, specifically addressing a high Total Blocking Time (TBT) identified in a Lighthouse report.

## Task Description

The goal of this task is to refactor a React component (`Dashboard.tsx`) that is causing performance issues due to a blocking computation. The heavy computation will be moved to a Web Worker to prevent blocking the main UI thread.

## Performance Analysis: Why is Total Blocking Time (TBT) High?

The original Lighthouse report showed a Total Blocking Time (TBT) of 600ms. This metric indicates the time during which the main thread was blocked long enough to prevent input responsiveness.

The reason for the high TBT in this project is the computationally intensive `for` loop located within the `useEffect` hook in the `Dashboard.tsx` component. This loop performs 100 million iterations (`1e8`) on the main JavaScript thread when the component mounts.

Since this loop runs for a significant duration without interruption, it monopolizes the main thread. During this time, the browser is unable to process user input, update the UI, or execute other critical tasks, leading to a period of unresponsiveness. This directly accounts for the high Total Blocking Time reported by Lighthouse.

By moving this computation to a Web Worker, we offload it from the main thread, allowing the UI to remain responsive.

## Post-Fix Verification

After refactoring, the performance metrics should be checked using Lighthouse. Refer to the `metrics_checklist.md` file for the target values.
