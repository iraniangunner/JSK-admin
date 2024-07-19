import { Create, useForm, useSelect, getValueFromEvent } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select, Upload } from "antd";
import { useApiUrl } from "@refinedev/core";
import { file2Base64 } from "@refinedev/core";

export const BlogPostCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categories",
  });

  const apiUrl = useApiUrl();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form
        {...formProps}
        onFinish={async (values) => {
          const base64Files = [];
          // @ts-ignore
          const { images } = values;

          for (const file of images) {
            if (file.originFileObj) {
              const base64String = await file2Base64(file);

              base64Files.push({
                ...file,
                base64String,
              });
            } else {
              base64Files.push(file);
            }
          }

          return (
            formProps.onFinish &&
            formProps.onFinish({
              ...values,
              images: base64Files,
            })
          );
        }}
        layout="vertical"
      >
        <Form.Item
          label={"Title"}
          name={["title"]}
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
          name={["description"]}
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
          name={["categoryId"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label={"Price"}
          name={["price"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Image">
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
        </Form.Item>
      </Form>
    </Create>
  );
};
