import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import StandupList from "./components/Standups/StandupList";
import StandupCreate from "./components/Standups/StandupCreate";
import StandupEdit from "./components/Standups/StandupEdit";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin title="g-bot" dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={StandupList}
      create={StandupCreate}
      edit={StandupEdit}
    />
  </Admin>
);
export default App;
