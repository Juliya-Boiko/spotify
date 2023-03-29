import '../styles/index.scss';
import { socialsList } from '../data/socials-list';
import { socialTemplate } from './templates/social';

const socialsContainer = document.getElementById('socials-list');
const socialsListHtml = socialsList.map(item => socialTemplate(item)).join('');
socialsContainer.innerHTML = socialsListHtml;





// import { data } from '../data/song-list';
// import { template } from './template';

// const container = document.getElementById('list'); 

// const html = data.map(item => template(item)).join('');

console.log(socialsListHtml);
// container.innerHTML = html;