import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { Button, Form, Input, Icon } from './SearchForm.styled';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = evt => {
    setQuery(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setQuery(query.toLowerCase().trim());
    if (!query) {
      toast('Please enter movie name');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        value={query}
        placeholder="Search movies"
        required
        autoFocus
        autoComplete="off"
        onChange={handleInput}
      />
      <Button type="submit">
        <Icon />
      </Button>
    </Form>
  );
};

SearchForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchForm;
