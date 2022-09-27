import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ShowButton,
  ListProps,
} from "react-admin";

const StandupList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export default StandupList;
