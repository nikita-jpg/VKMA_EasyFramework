import Panel_C from './Panel_C/Panel_C';
import Panel_D from './Panel_D/Panel_D';
import React from 'react';
import PropTypes from 'prop-types';
import { View } from '@vkontakte/vkui';

const Panel_C_ID = 'Panel_C';
const Panel_D_ID = 'Panel_D';

const SecondView = ({ id }) => {
  return (
    <View id={id} activePanel={Panel_C}>
      <Panel_C id={Panel_C_ID}></Panel_C>
      <Panel_D id={Panel_D_ID}></Panel_D>
    </View>
  );
};

SecondView.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SecondView;
