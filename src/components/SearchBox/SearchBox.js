import { SearchWrap, Input, SearchBtn } from './SearchBox.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Enter a search value');
      return;
    }

    onSubmit(query);

    resetForm();
  };

  const resetForm = () => {
    setQuery('');
  };

  return (
    <SearchWrap onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        value={query}
        className="input"
        type="text"
        autocomplete="off"
        autoFocus
      />
      <SearchBtn>Search</SearchBtn>
    </SearchWrap>
  );
};
Searchbox.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbox;
