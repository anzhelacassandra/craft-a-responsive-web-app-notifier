/**
 * Craft A Responsive Web App Notifier
 * 
 * This project aims to create a responsive web app notifier that displays 
 * important updates and notifications to users in a visually appealing way.
 * 
 * @author [Your Name]
 * @version 1.0
 */

// constants
const NOTIFIER_CONTAINER_ID = 'notifier-container';
const NOTIFIER_ITEM_CLASS = 'notifier-item';
const NOTIFIER_ITEM_TEMPLATE = `
  <div class="${NOTIFIER_ITEM_CLASS}">
    <div class="notifier-icon"></div>
    <div class="notifier-message"></div>
    <div class="notifier-close"></div>
  </div>
`;

// DOM elements
const notifierContainer = document.getElementById(NOTIFIER_CONTAINER_ID);

// notifier class
class Notifier {
  constructor(message, type) {
    this.message = message;
    this.type = type;
  }

  createNotifierItem() {
    const notifierItem = document.createElement('div');
    notifierItem.innerHTML = NOTIFIER_ITEM_TEMPLATE;
    notifierItem.querySelector('.notifier-icon').classList.add(`notifier-icon-${this.type}`);
    notifierItem.querySelector('.notifier-message').textContent = this.message;
    return notifierItem;
  }

  displayNotifier() {
    const notifierItem = this.createNotifierItem();
    notifierContainer.appendChild(notifierItem);
    setTimeout(() => {
      notifierItem.classList.add('fade-out');
      setTimeout(() => {
        notifierContainer.removeChild(notifierItem);
      }, 500);
    }, 5000);
  }
}

// example usage
const notify = new Notifier('You have a new message!', 'success');
notify.displayNotifier();

// responsive design
window.addEventListener('resize', () => {
  const notifierItems = document.querySelectorAll(`.${NOTIFIER_ITEM_CLASS}`);
  notifierItems.forEach((item) => {
    item.style.width = `${window.innerWidth - 20}px`;
  });
});