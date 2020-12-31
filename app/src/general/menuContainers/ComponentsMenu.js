import React, { useEffect, useContext } from 'react';
import { Typography, Divider } from '@material-ui/core';

import { AppContext } from '../../context/AppContext';
import StyledButton from '../PrimaryButton';
import StyledMenuTitle from '../StyledMenuTitle';

export default function ComponentsMenu({ menuItems }) {
  const { onComponentSelected, componentName } = useContext(AppContext);

  useEffect(() => {
    onComponentSelected(menuItems[0].items[0].componentId);
  }, []);

  const onClick = e => {
    onComponentSelected(e.target.id);
  };
  const getButton = (id, text, key) => (
    <StyledButton
      key={key}
      id={id}
      onClick={onClick}
      isSelected={componentName === id}
    >
      {text}
    </StyledButton>
  );

  const getTitle = title => (
    <StyledMenuTitle>
      <Typography>{`{ ${title} }`}</Typography>
    </StyledMenuTitle>
  );

  const mapItems = () => {
    return menuItems.map(({ title, items }, idx) => {
      return (
        <div key={idx}>
          {title && getTitle(title)}
          {items.map(({ componentId, componentName }, index) =>
            getButton(componentId, componentName, (idx + 1) * (index + 1))
          )}
          {idx < menuItems.length - 1 && <Divider />}
        </div>
      );
    });
  };

  return <div className={'componentsMenu'}>{mapItems()}</div>;
}
