import React from 'react';
import { Panel } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

const Panel_C = ({ id }) => {
  return (
    <Panel id={id}>
      <span>Panel_C</span>
    </Panel>
  );
};

Panel_C.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Panel_C;
