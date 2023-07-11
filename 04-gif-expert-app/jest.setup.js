import "isomorphic-fetch";
import 'whatwg-fetch';
import { jest } from "@jest/globals";


require('dotenv').config({
    path: '.env'
})

jest.mock("./src/helpers/getEnvironments", () => ({
  getEnvironments: () => ({ ...process.env }),
}));

