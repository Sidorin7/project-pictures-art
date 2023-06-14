import modals from "./modules/models";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  modals();
  sliders(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn");
  sliders(".main-slider-item", "vertical");
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]') // для ввода имени
  checkTextInputs('[name="message"]') // для ввода комментариев
  showMoreStyles('.button-styles', '#styles .row');
});