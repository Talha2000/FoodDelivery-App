# Browser Verify

Use this workflow to validate the app in the browser before declaring the project healthy.

## Goal

Confirm the app still loads, renders main routes, and does not have obvious UI breakage after a dependency or framework upgrade.

## Required flow

1. Start the app in a terminal with the project's dev or production server.
2. Open a browser page for the homepage.
3. Confirm the page loads without a blank screen or fatal error.
4. Check the main navigation or route entry points.
5. Test login/register flows only if they are relevant to the change.
6. If a page fails to load, capture the problem, identify the root cause, and fix it before continuing.

## Browser validation checklist

- Homepage loads successfully.
- No console-level fatal runtime error is visible.
- Navigation links work.
- Authentication pages render without crashing.
- Core app layout remains intact.
- Any route touched by the change loads as expected.

## Acceptance rule

Only say the app is healthy after the browser check confirms the app loads and the changed area behaves correctly.

## Do not do

- Do not rely on build success alone.
- Do not claim UI is fixed without opening the app in a browser.
- Do not ignore console/runtime errors from the page.
