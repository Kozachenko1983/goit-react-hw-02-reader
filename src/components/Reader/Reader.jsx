import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css'
import Counter from '../Counter/Counter.jsx';
import Controls from '../Controls/Controls.jsx';
import Publication from '../Publication/Publication.jsx';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    // index: PropTypes.number.isRequired,
    // currentPage: PropTypes.number.isRequired,
  };

  state = {
    index: 0,
    currentPage: 1,
  };

  nextPage = () => {
    this.setState(s => ({
      currentPage: s.currentPage + 1,
      index: s.index + 1,
    }));
  };

  prevPage = () => {
    this.setState(s => ({
      currentPage: s.currentPage - 1,
      index: s.index - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { currentPage, index } = this.state;

    return (
      <div className={styles.reader}>
        <Controls
          onNextPage={this.nextPage}
          onPrevPage={this.prevPage}
          disabledPrev={!(this.state.currentPage > 1)}
          disabledNext={!(this.state.currentPage < items.length)}
        />
        <Counter currentPage={currentPage} allPages={items.length} />
        <Publication item={items[index]} />
      </div>
    );
  }
}
