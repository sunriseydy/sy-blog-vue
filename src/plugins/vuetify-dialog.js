// https://github.com/yariksav/vuetify-dialog
import vuetify from '@/plugins/vuetify'
import Vue from 'vue'
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'

Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})
