import { Edit, useForm, useSelect, getValueFromEvent } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select, Upload } from "antd";
import { useApiUrl } from "@refinedev/core";
import { file2Base64 } from "@refinedev/core";

export const UserEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({
    resource: "users",
    action: "edit",
    id: 2,
  });




  const blogPostsData = queryResult?.data?.data;

console.log(blogPostsData)

  // const { selectProps: categorySelectProps } = useSelect({
  //   resource: "categories",
  //   defaultValue: blogPostsData?.category?.id,
  //   queryOptions: {
  //     enabled: !!blogPostsData?.category?.id,
  //   },
  // });

  // const apiUrl = useApiUrl();

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form
        {...formProps}
        // onFinish={async (values) => {
        //   const base64Files = [];
        //   // @ts-ignore
        //   const { images } = values;

        //   for (const file of images) {
        //     if (file.originFileObj) {
        //       const base64String = await file2Base64(file);

        //       base64Files.push({
        //         ...file,
        //         base64String,
        //       });
        //     } else {
        //       base64Files.push(file);
        //     }
        //   }

        //   console.log(base64Files);

        //   return (
        //     formProps.onFinish &&
        //     formProps.onFinish({
        //       ...values,
        //       images: [
        //         ...blogPostsData?.images,
        //         ...base64Files.map((f: any, index) => f.response.location),
        //       ],
        //     })
        //   );
        // }}
        layout="vertical"
      >
        <Form.Item
          label={"Title"}
          name={["email"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Content"}
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item
          label={"Category"}
          name={["role"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item
          label={"Category"}
          name={["role"]}
        
          initialValue={formProps?.initialValues?.role?.id}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item> */}

        {/* <Form.Item label="Image">
          <Form.Item
            name={["images"]}
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="file"
              action={`${apiUrl}/files/upload`}
              listType="picture"
              maxCount={5}
              multiple
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item> */}
      </Form>
    </Edit>
  );
};
