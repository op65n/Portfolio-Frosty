import './assets/globalstyle.css'
import { createApp } from 'vue'
import router from './router'

import Application from './Application.vue'

const application = createApp(Application)
application.use(router).mount('#app')
