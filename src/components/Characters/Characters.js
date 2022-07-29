import { IMG_STANDARD_XLARGE } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import classes from './Characters.css';
import { ROOT_MODAL } from '../../constants/root';
import imgClose from './img/close.png';
import Notification from '../Notification';

class Characters {
    renderContent(data) {
        let htmlContent = '';

        data.forEach(({name, thumbnail: {extension, path}}) => {
            const imgSrc = `${path}${IMG_STANDARD_XLARGE}.${extension}`;
            
            htmlContent += `
                <li class="${classes.characters__item}">
                    <img class="img-cover ${classes.characters__img}" src=${imgSrc}>
                    <span class="${classes.characters__name}">${name}</span>
                </li>
            `
        });

        const htmlWrapper = `
            <div class="${classes.wrapper}">
                <ul class="${classes.characters__container}">
                    ${htmlContent}
                </ul>
                <button 
                class="btn btn-contain ${classes.characters__btn}"
                style="background-image: url(${imgClose}"
                ></button>
            </div>
            
        `;
     
        ROOT_MODAL.innerHTML = htmlWrapper;

        document.querySelector(`.${classes.characters__btn}`).addEventListener('click', this.close)
    }

    renderNotification() {
        Notification.render();
    }

    close() {
        ROOT_MODAL.innerHTML = '';
    }
    async render(uri) {
        const data = await getDataApi.getData(uri);

        data.length ? this.renderContent(data) : this.renderNotification()
    }
}

export default new Characters();