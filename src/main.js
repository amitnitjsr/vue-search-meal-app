import { createApp } from 'vue'
import router from './router'
import store from './store'
import './style.css'
import App from './App.vue'

// const cors = require("cors");
// App.use(cors());
// const corsOrigin ={
//     origin:'http://localhost:3000', //or whatever port your frontend is using
//     credentials:true,            
//     optionSuccessStatus:200
// }
// app.use(cors(corsOrigin));
createApp(App)
// .use(cors(corsOrigin))
.use(router)
.use(store)

.mount('#app')
