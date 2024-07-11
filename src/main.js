// Importa la libreria core di FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';

// Importa il componente FontAwesome per Vue
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importa l'icona specifica che vuoi utilizzare
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

// Aggiungi l'icona alla libreria
library.add(faRegularStar);

import './style.css';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Registra il componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
