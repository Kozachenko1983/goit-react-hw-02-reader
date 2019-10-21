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
    index: 0,
  };

  handleButtons = event => {
    if (event.target.name === 'next') {
      this.setState(s => ({
        index: s.index + 1,
      }));
    }
    if (event.target.name === 'prev') {
      this.setState(s => ({
        index: s.index - 1,
      }));
    }
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    const currentPage = index + 1;
    return (
      <div className={styles.reader}>
        <Controls
          onChangePage={this.handleButtons}
          disabledPrev={!(currentPage > 1)}
          disabledNext={!(currentPage < items.length)}
        />
        <Counter currentPage={currentPage} allPages={items.length} />
        <Publication item={items[index]} />
      </div>
    );
  }
}
