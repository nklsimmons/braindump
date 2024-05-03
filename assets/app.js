import { createApp } from "vue";
import Hello from "./vue/controllers/Hello.vue"

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

const app = createApp(Hello).mount("#testing")

