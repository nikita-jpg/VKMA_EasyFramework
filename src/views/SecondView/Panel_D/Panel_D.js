import { Panel } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import React from "react";

const Panel_D = ({ id }) => {
  return (
    <Panel id={id}>
      <span>Panel_D</span>
    </Panel>
  );
};

Panel_D.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Panel_D;
