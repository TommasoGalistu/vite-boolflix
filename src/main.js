// Importa la libreria core di FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';

// Importa il componente FontAwesome per Vue
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importa le icone specifiche che vuoi utilizzare
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';

// Aggiungi le icone alla libreria
library.add(faRegularStar, faSolidStar);



import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Registra il componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');