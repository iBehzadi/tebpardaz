import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret,faBars, faHouseMedical, faPeopleGroup, faUserDoctor, faCertificate, faRibbon, faEnvelope, faLocationDot, faMobile, faXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faLocationDot,faEnvelope,faMobile,faBars,faHouseMedical,faPeopleGroup,faUserDoctor,faCertificate,faRibbon,faXmark)


const vuetify = createVuetify({

  theme: {
    defaultTheme: 'light',
    //
  },
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },

  })
  

createApp(App).use(router).use(vuetify).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
