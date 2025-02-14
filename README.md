# api-task

 - API authentication and enpoints are located in `./src/api` folder. 
 - API tests are located in `./tests/api-tests` folder. 
 - Test configuration for API tests is in `playwright-api.config.ts` 
 - Axios is used as HTTP client and Playwright as a test runner.

### API test description 
Test calls two endpoints: it sends POST request to create an order, and retrieves orderId from its response, then another call to GET endpoint is made, to verify if the order with corresponding id had been received and has correct data.

### Run API Tests 

Install Dependencies `npm install`

Populate `CLIENT_ID` and `CLIENT_SECRET` values in .env file

Run with commant 
`npm run test:api`

For security reasons, I'm not putting `client_id` and `client_secret` into public access, these values are retrieved from environmetal variables. Populate `client_id` and `client_secret` and run the command.


# ui-task

- UI test is build on page object model. Page implementation is localed in `./src/pages` and search component is in `./src/components`
- Test configuration for UI tests is located in `playwright.config.ts`

### How to Run UI Test

Install Dependencies `npm install`

Run with command `npm run test`
