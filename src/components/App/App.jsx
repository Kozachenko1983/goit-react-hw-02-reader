import React from 'react';
import 'normalize.css';
import publications from '../../assets/publications.json';
import Reader from '../Reader/Reader';

const App = () => <Reader items={publications} />;

export default App;
