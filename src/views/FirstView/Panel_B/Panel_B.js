import { Panel } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import React from "react";

const Panel_B = ({ id }) => {
  return (
    <Panel id={id}>
      <span>AS</span>
    </Panel>
  );
};

Panel_B.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Panel_B;
