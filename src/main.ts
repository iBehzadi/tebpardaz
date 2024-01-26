import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret,faBars, faHouseMedical, faPeopleGroup, faUserDoctor, faCertificate, faRibbon, faEnvelope, faLocationDot, faMobile, faXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faLocationDot,faEnvelope,faMobile,faBars,faHouseMedical,faPeopleGroup,faUserDoctor,faCertificate,faRibbon,faXmark)


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
    components,
    directives,

  })
  

createApp(App).use(router).use(vuetify).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
