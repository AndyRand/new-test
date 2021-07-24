import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Vendor" source="vendor" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
