/* eslint-disable no-use-before-define */
import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')`
  width: 100%;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    font-size: 14px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;

const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;
  font-size:14px;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`;

const Listbox = styled('ul')`

    
  width:100%;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  @media (min-width: 768px) {
    max-width: 418px;
  }

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;

    & svg {
      color: #9641E5;
      font-size: 16px;
    }
  }
`;

export default function CustomizedHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [top100Films[1]],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  return (
    <NoSsr>
      <div>
        <div {...getRootProps()}>
          <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
            {value.map((option, index) => (
              <Tag label={option.title} {...getTagProps({ index })} />
            ))}

            <input {...getInputProps()} />
          </InputWrapper>
        </div>
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li {...getOptionProps({ option, index })} style={{fontSize:"14px", display:"flex", alignItems:"center"}}>
                <Avatar alt="" src={option.url} style={{marginRight:"10px"}}/>
                <span>{option.title}</span>
                <CheckIcon fontSize="small"/>
              </li>
            ))}
          </Listbox>
        ) : null}
      </div>
    </NoSsr>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Shawshank Redemption', url: "./images/avatar/1.jpg" },
  { title: ' Godfather', url: "./images/avatar/2.jpg" },
  { title: ' Godfather: Part II', url: "./images/avatar/3.jpg" },
  { title: ' Dark Knight', url: "./images/avatar/4.jpg" },
  { title: '12 Angry Men', url: "./images/avatar/5.jpg"  },
  { title: "Schindler's List", url: "./images/avatar/6.jpg"  },
  { title: 'Pulp Fiction', url: "./images/avatar/1.jpg"  },
  { title: ' Lord of the Rings', url: "./images/avatar/2.jpg"  },
  { title: ' Good, the Bad and the Ugly', url: "./images/avatar/3.jpg" },
  { title: 'Fight Club',url: "./images/avatar/4.jpg"  },
  { title: ' Lord of the Rings', url: "./images/avatar/5.jpg"  },
  { title: 'Star Wars: Episode', url: "./images/avatar/6.jpg"  },
  { title: 'Forrest Gump', url: "./images/avatar/1.jpg"  },
  { title: 'Inception', url: "./images/avatar/2.jpg" },
  { title: ' Lord of the Rings', url: "./images/avatar/3.jpg"  },
  { title: "One Flew Over", url: "./images/avatar/4.jpg"  },
  { title: 'Goodfellas', url: "./images/avatar/5.jpg"  },
  { title: ' Matrix', url: "./images/avatar/6.jpg"  },
  { title: 'Seven Samurai', url: "./images/avatar/1.jpg" },
  { title: 'Star War', url: "./images/avatar/2.jpg"  },
  { title: 'City of God', url: "./images/avatar/3.jpg" },
  { title: 'Se7en',url: "./images/avatar/4.jpg" },
  { title: ' Silence of the Lambs', url: "./images/avatar/5.jpg"  },
  { title: "It's a Wonderful Life", url: "./images/avatar/6.jpg"  },
  { title: 'Life Is Beautiful', url: "./images/avatar/1.jpg"  },
  { title: ' Usual Suspects', url: "./images/avatar/2.jpg"  },
  { title: 'Léon:  Professional', url: "./images/avatar/3.jpg"  },
  { title: 'Spirited Away', url: "./images/avatar/4.jpg"  },
  { title: 'Saving Private Ryan', url: "./images/avatar/5.jpg"  },
  { title: 'Once Upon a Time in the West', url: "./images/avatar/6.jpg"  },
  { title: 'American History X', url: "./images/avatar/1.jpg" },
  { title: 'Interstellar', url: "./images/avatar/2.jpg"  },
  { title: 'Casablanca', url: "./images/avatar/3.jpg"  },
  { title: 'City Lights', url: "./images/avatar/4.jpg"  },
  { title: 'Psycho', url: "./images/avatar/5.jpg"  },
  { title: ' Green Mile',url: "./images/avatar/6.jpg"  },
  { title: ' Intouchables', url: "./images/avatar/3.jpg" }  
];
