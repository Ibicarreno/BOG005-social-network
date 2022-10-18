/* eslint-disable quotes */
import { logOutUser } from "../src/auth/authentication.js";
import { onGetRecipes } from "../src/firestore/methodsFirestore.js";
import { feed } from "../src/pages/feed.js";

jest.mock("../src/auth/authControllers.js");
jest.mock('../src/auth/authentication.js');
jest.mock("../src/firestore/firestore.js");
jest.mock("../src/firestore/methodsFirestore.js");
jest.mock("../src/config/configFireBaseImport.js");
jest.mock("../src/main.js");

describe("Function feed", () => {
  test("it should show a post when in firestore there is a post", () => {
    document.body.innerHTML = `<main id="root"></main>`;
    const containerFeed = feed();
    const post = containerFeed.querySelector("#postUsers");
    onGetRecipes().then((result) => result.forEach((doc) => {
      post.innerHTML = doc.data().title;
      expect(post.innerHTML).toBe(doc.data().title);
    }));
  });

  /* El botón editar sale null (.btnsEdit feed.js, Ln 101)  */
  test('Edit Post', () => {
    const containerFeed = feed();
    window.dispatchEvent(new Event('DOMContentLoaded'));
    console.log('ongetrecipe ', onGetRecipes());
    onGetRecipes();
    const post = containerFeed.querySelector("#postUsers");
    const btnEdit = post.querySelector('.btnsEdit');
    console.log('post ', post);
    console.log('btnEdit 1 ', btnEdit);
    // btnEdit.click();
    // console.log('btnEdit  2 ', btnEdit);
  });

  test('the button logOut should show confirm', () => {
    window.confirm = () => true;
    const containerFeed = feed();
    const buttonLogOut = containerFeed.querySelector('#btnLogOut');
    buttonLogOut.click();
    expect(logOutUser).toBeCalled();
  });

  /* Es llamado cero veces  (#publishRecipe feed.js 145) */
  test('send form with input empty', () => {
    window.alert = jest.fn();
    const containerFeed = feed();
    // const publishRecipe = containerFeed.querySelector('#btnPublishRecipe');
    const publishRecipe = containerFeed.querySelector('#publishRecipe');
    const inputTitle = publishRecipe.querySelector('#recipeName');
    const inputDescrption = publishRecipe.querySelector('#recipe-description');
    inputTitle.value = '';
    inputDescrption.value = '';
    publishRecipe.dispatchEvent(new Event('submit'));
    expect(window.alert).toBeCalled();
  });
});
