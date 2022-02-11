import { Panel } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import React from "react";

const Panel_A = ({ id }) => {
  return (
    <Panel id={id}>
      <span>Panel_Aasx</span>
    </Panel>
  );
};

Panel_A.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Panel_A;
