import { createSelector } from 'reselect';
import { getItems } from '../items/items-selectors';
import { getFilter } from '../filter/filter-selectors';

// Сосотавной(композитный) селектор состоит из маленьких селекторов
// Аргументом принимает state
// Его передаём в качестве параметров для "useSelector"
// "+": простота в рефакторинге

export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
  },
);
