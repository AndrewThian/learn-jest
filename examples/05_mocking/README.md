## Mocking in Jest ## 

In unit testing, **mocking** allows us to test functionality that depends on external sources:
- Database
- Network requests
- accessing of files
- any external system outside of our current source

so that:
1. Your tests can run faster, giving a quick turnaround time during dev work.
2. our unit tests are independent of any external conditions.
3. our tests don't pollute any data storage we have, becacuse they don't touch the database
4. any test does not change state for subsequent test and re-running tests should start from a known reproducible starting point
5. no worries about rate limiting on API calls and network requests.