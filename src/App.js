import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Root,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { React } from "react";
import FirstView from "./views/FirstView/FirstView";
import SecondView from "./views/SecondView/SecondView";

const FirstView_ID = "FirstView";
const SecondView_ID = "SecondView";

const App = () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <Root activeView={FirstView_ID}>
            <FirstView id={FirstView_ID}></FirstView>
            <SecondView id={SecondView_ID}></SecondView>
          </Root>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
