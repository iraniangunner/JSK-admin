import {
  DateField,
  MarkdownField,
  Show,
  TextField,
  ImageField,
} from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography, Space } from "antd";

const { Title } = Typography;

export const BlogPostShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "categories",
    id: record?.category?.id || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Title"}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{"Content"}</Title>
      <MarkdownField value={record?.description} />
      <Title level={5}>{"Category"}</Title>
      <TextField
        value={
          categoryIsLoading ? <>Loading...</> : <>{categoryData?.data?.name}</>
        }
      />
    
      <Title level={5}>{"CreatedAt"}</Title>
      <DateField value={record?.creationAt} />
      <Title level={5}>Images</Title>
      <Space wrap>
        {record?.images.map((img: any, index: any) => (
          <ImageField
            key={index}
            value={img.replace(/[\[\]\\"]/g, "")}
            // value={img.url}
            // title={img.name}
            width={200}
          />
        ))}
      </Space>
    </Show>
  );
};
