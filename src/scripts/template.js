const indexFormat = (idx) => {
  return idx.toString().length === 1 ? `0${idx}` : idx;
};

export const template = (item) => {
  const { id, title, album, img, artist, duration } = item;

  return `
    <li class="songs-list__item">
        <div class="songs-list__header">
          <span class="songs-list__index">${indexFormat(id)}</span>
          <img src=${img} alt="Cover" class="songs-list__cover">
          <div class="songs-list__song">
            <p class="songs-list__text--secondary">${album}</p>
            <p class="songs-list__text--primary">${title}</p>
          </div>
          <div class="songs-list__artist">
            <p class="songs-list__text--secondary">Artist</p>
            <p class="songs-list__text--primary">${artist}</p>
          </div>
          <div class="songs-list__duration">
            <p class="songs-list__text--secondary">Time</p>
            <p class="songs-list__text--primary">${duration}</p>
          </div>
        </div>
        <div>
          <button type="button" class="actions__btn">
            <svg class="actions__icon">
              <use href="./src/images/symbol-defs.svg#icon-heart"></use>
            </svg>
          </button>
          <button type="button" class="actions__btn">
            <span class="actions__dot"></span><span class="actions__dot"></span><span class="actions__dot"></span>
          </button>
        </div>

    </li>
  `;
};