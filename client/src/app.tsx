import { Admin, Resource } from "react-admin";
import StandupList from "./components/Standups/StandupList";
import StandupCreate from "./components/Standups/StandupCreate";
import StandupEdit from "./components/Standups/StandupEdit";
import fakeDataProvider from "ra-data-fakerest";
import data from "./db";

const dataProvider = fakeDataProvider(data);

const App = () => (
  <Admin title="g-bot" dataProvider={dataProvider}>
    <Resource
      name="standups"
      list={StandupList}
      create={StandupCreate}
      edit={StandupEdit}
    />
  </Admin>
);
export default App;
