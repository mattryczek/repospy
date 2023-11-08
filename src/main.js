import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { Octokit } from 'octokit';

const app = createApp(App)

app.use(router)

app.mount('#app')