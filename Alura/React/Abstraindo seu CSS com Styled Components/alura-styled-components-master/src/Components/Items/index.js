import React from 'react';
import styled from 'styled-components';
import ImageFilter from '../ImageFilter';
import Item from '../Item';

const ItemsWrapper = styled.div`
  align-items: center;
  border-radius: 10px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  font-size: 12px;
  justify-content: space-around;
  margin: 2px 0;
  padding: 10px;
`;

const Items = (props) => {
  return (
    <ItemsWrapper>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </ItemsWrapper>
  );
};

export default Items;
