/* eslint-disable no-unused-vars */
const createEmail = (email, password, nameUser) => Promise.resolve();

const validateUserAndPass = jest.fn(() => Promise.resolve());
// const validateUserAndPass = (email, password) => Promise.resolve();

const loginWithGoogle = jest.fn(() => Promise.resolve());
// const loginWithGoogle = () => Promise.resolve();

const logOutUser = () => Promise.resolve();

export {
  createEmail, validateUserAndPass, loginWithGoogle, logOutUser,
};
