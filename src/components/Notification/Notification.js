import { ROOT_MODAL } from '../../constants/root';
import classes from './Notification.css';
import imgClose from './img/close.png';

class Notification {
    render() {
        let htmlWrapper = `
            <div class="${classes.notification__container}">
                <span>Нет контента</span>

                <button 
                class="btn btn-contain ${classes.notification__close}"
                style="background-image: url(${imgClose}"
                ></button>
            </div>
        `

        ROOT_MODAL.innerHTML = htmlWrapper;

        document.querySelector(`.${classes.notification__close}`).addEventListener('click', this.close)
    }

    close() {
        ROOT_MODAL.innerHTML = '';
    }
}

export default new Notification();