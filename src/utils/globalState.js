// global state workaround with the intent to close modal window from gatsby-browsers onRouteUpdate instead of in Navbar.js.
// closing the modal view in Navbar.js results in a flash of the home page before navigation render to the new page.

export let isModalOpen = false;

export function setModalOpen(value) {
  isModalOpen = value;
}