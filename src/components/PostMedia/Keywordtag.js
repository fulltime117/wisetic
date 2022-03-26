/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default function Tags() {
  return (
    <div>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label=""
            placeholder="Key word"
          />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption'},
  { title: 'The Godfather'},
  { title: 'The Godfather: Part II'},
  { title: 'The Dark Knight'},
  { title: '12 Angry Men'},
  { title: "Schindler's List"},
  { title: 'Pulp Fiction'},
  { title: 'The Lord of the Rings: The Return of the King'},
  { title: 'The Good, the Bad and the Ugly'},
  { title: 'Fight Club'},
  { title: 'The Lord of the Rings: The Fellowship of the Ring'},
  { title: 'Star Wars: Episode V - The Empire Strikes Back'},
  { title: 'Forrest Gump'},
  { title: 'Inception'},
  { title: 'The Lord of the Rings: The Two Towers'},
  { title: "One Flew Over the Cuckoo's Nest"},
  { title: 'Goodfellas'},
  { title: 'The Matrix'},
  { title: 'Seven Samurai'},
];
