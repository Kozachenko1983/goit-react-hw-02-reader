import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    indexArrayPublication: 0,
  };

  handleButtons = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      indexArrayPublication:
        name === 'next'
          ? prevState.indexArrayPublication + 1
          : prevState.indexArrayPublication - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { indexArrayPublication } = this.state;
    const currentPage = indexArrayPublication + 1;
    const disabledPrev = currentPage <= 1;
    const disabledNext = currentPage >= items.length;
    return (
      <div className={styles.reader}>
        <Controls
          onChangePage={this.handleButtons}
          disabledPrev={disabledPrev}
          disabledNext={disabledNext}
        />
        <Counter currentPage={currentPage} allPages={items.length} />
        <Publication item={items[indexArrayPublication]} />
      </div>
    );
  }
}
