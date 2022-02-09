import { createApp } from 'vue'
import App from './App.vue'
import 'v-calendar/dist/style.css';
import { SetupCalendar } from 'v-calendar';

const app = createApp(App)
app.use(SetupCalendar)
app.mount('#app')
