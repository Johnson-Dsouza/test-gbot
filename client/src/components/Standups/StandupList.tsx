import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  ListProps,
} from "react-admin";

const StandupList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="members" />
      <TextField source="channel" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export default StandupList;
