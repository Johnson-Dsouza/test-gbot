import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostCreate } from "./components/Posts";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin title="g-bot" dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} create={PostCreate} />
  </Admin>
);
export default App;
