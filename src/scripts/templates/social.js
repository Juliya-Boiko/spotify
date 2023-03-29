export const socialTemplate = (item) => {
  const { icon, url } = item;

  return `
    <li class="social-list__item">
      <a href=${url} class="social-list__link">
        <svg class="" width="18" height="18" class="social-list__icon">
          <use href="./src/images/symbol-defs.svg#${icon}"></use>
        </svg>
      </a>
    </li>
  `;
};