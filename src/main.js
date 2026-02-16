import { createApp } from "vue";
// import "./assets/main.css";
import "./assets/grid.css";
import "./assets/main-copy.css";
import App from "./App.vue";
import { router } from "./router/router";

// Import elements
import BaseButton from "./components/Element/BaseButton.vue";
import BaseImage from "./components/Element/BaseImage.vue";
import BaseParagraph from "./components/Element/BaseParagraph.vue";
import BaseTextArea from "./components/Element/BaseTextArea.vue";
import BaseTitle from "./components/Element/BaseTitle.vue";
import HeroTitle from "./components/Element/HeroTitle.vue";
import InputField from "./components/Element/InputField.vue";
import ListItem from "./components/Element/ListItem.vue";
import SelectDropdown from "./components/Element/SelectDropdown.vue";
import SubTitle from "./components/Element/SubTitle.vue";

const app = createApp(App);

// Global registration
app.component("BaseButton", BaseButton);
app.component("BaseImage", BaseImage);
app.component("BaseParagraph", BaseParagraph);
app.component("BaseTextArea", BaseTextArea);
app.component("BaseTitle", BaseTitle);
app.component("HeroTitle", HeroTitle);
app.component("InputField", InputField);
app.component("ListItem", ListItem);
app.component("SelectDropdown", SelectDropdown);
app.component("SubTitle", SubTitle);

app.use(router);
app.mount("#app");
