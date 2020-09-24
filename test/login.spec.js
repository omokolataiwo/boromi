import { expect } from 'chai';
import request from 'request';

import app from '../src/index';

const { PORT } = process.env;
const BASE_URL = `http://localhost:${PORT}`;

describe('when user login', () => {
  const PATH_URL = `${BASE_URL}/login`;

  describe('when credential is valid', () => {
    it('should generate token', () => {
      request(PATH_URL, (error, reponse, body) => {

      })
    });
  });

  describe('when credential is valid', () => {

  });
})
