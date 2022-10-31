# Cloudflare Functions HTTP status bug

TLDR: adding pages plugins messes up the response status code when deployed to CF.
It will always be `200`. Locally it works fine.

- Buggy function (with sentry plugin): https://functions-status-bug.pages.dev/buggy
- Correct function: https://functions-status-bug.pages.dev/correct
