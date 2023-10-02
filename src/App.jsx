import cn from 'classnames';

import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

function getPrepareGoods(goods, sortField, isReversed) {
  const prepareGoods = [...goods];

  if (sortField) {
    prepareGoods.sort((good1, good2) => {
      switch (sortField) {
        case SORT_FIELD_NAME:
          return good1.localeCompare(good2);

        case SORT_FIELD_LENGTH:
          return good1.length - good2.length;

        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    prepareGoods.reverse();
  }

  return prepareGoods;
}

const SORT_FIELD_NAME = 'name';
const SORT_FIELD_LENGTH = 'length';

const sortButtons = [
  { name: 'Sort alphabetically', class: 'is-info', change: SORT_FIELD_NAME },
  { name: 'Sort by length', class: 'is-success', change: SORT_FIELD_LENGTH },
];

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [isReversed, setIsReversed] = useState(false);
  const visibleGoods = getPrepareGoods(goodsFromServer, sortField, isReversed);

  const onGoodClick = sortChange => () => {
    setSortField(sortChange);
  };

  const onReverseClick = () => {
    setIsReversed(!isReversed);
  };

  const reset = () => {
    setIsReversed(false);
    setSortField('');
  };

  return (
    <div className="section content">
      <div className="buttons">
        {sortButtons.map(button => (
          <button
            key={button.name}
            type="button"
            className={cn('button', `${button.class}`, { 'is-light': sortField !== button.change })}
            onClick={onGoodClick(button.change)}
          >
            {button.name}
          </button>
        ))}

        <button
          type="button"
          className={cn('button is-warning', { 'is-light': !isReversed })}
          onClick={onReverseClick}
        >
          Reverse
        </button>

        {(sortField || isReversed) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={reset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(item => (
          <li data-cy="Good" key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};