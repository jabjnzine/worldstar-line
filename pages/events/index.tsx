import { Button, Checkbox, Form, FormProps, Input, Select } from "antd";

const Page = () => {
  type FieldType = {
    name?: string;
    code?: string;
    position?: string;
    team?: string;
  };

  const options = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "Yiminghe", label: "yiminghe" },
  ];

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="flex justify-center items-center bg-[#670001] h-dvh p-8">
        <Form
          className="w-dvw"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout={`vertical`}
        >
          <Form.Item<FieldType>
            label="ชื่อ - นามสกุล"
            name="name"
            rules={[{ required: true, message: "กรุณากรอก ชื่อ - นามสกุล" }]}
          >
            <Input placeholder="กรุณากรอก ชื่อ - นามสกุล" />
          </Form.Item>

          <Form.Item<FieldType>
            label="รหัสสมาชิก"
            name="code"
            rules={[{ required: true, message: "กรุณากรอกรหัสสมาชิก" }]}
          >
            <Input placeholder="กรุณากรอกรหัสสมาชิก" />
          </Form.Item>
          <Form.Item<FieldType>
            name="position"
            label="ตำแหน่ง"
            rules={[{ required: true, message: "กรุณาเลือกตำแหน่ง" }]}
          >
            <Select
              options={options}
              placeholder="กรุณาเลือกตำแหน่ง"
              allowClear
            ></Select>
          </Form.Item>
          <Form.Item<FieldType>
            name="team"
            label="ทีม (ระบุชื่อผู้นำของท่าน)"
            rules={[
              {
                required: true,
                message: "กรุณาเลือกทีม (ระบุชื่อผู้นำของท่าน)",
              },
            ]}
          >
            <Select
              options={options}
              placeholder="กรุณาเลือกทีม (ระบุชื่อผู้นำของท่าน)"
              allowClear
            ></Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              ลงทะเบียน
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Page;
