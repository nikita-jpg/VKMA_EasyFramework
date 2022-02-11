import { View } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import React from "react";
import Panel_A from "./Panel_A/Panel_A";
import Panel_B from "./Panel_B/Panel_B";

const Panel_A_ID = "Panel_A";
const Panel_B_ID = "Panel_B";

const FirstView = ({ id }) => {
  return (
    <View id={id} activePanel={Panel_A_ID}>
      <Panel_A id={Panel_A_ID}></Panel_A>
      <Panel_B id={Panel_B_ID}></Panel_B>
    </View>
  );
};

FirstView.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FirstView;
