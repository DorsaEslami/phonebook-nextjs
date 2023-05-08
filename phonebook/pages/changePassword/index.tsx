import Link from 'next/link';
import Image from 'next/image';
import Styles from '../../styles/components/changePassword/changePassword.module.scss';
import ChangePasswordImage from '../../public/img/change-password.jpg';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Button, Form, Input } from 'antd';
interface Props {
  titles: {
    header: string,
    body: string,
    note: string
  }
}
export const getStaticProps: GetStaticProps = async () => {
  var titles = {
    header: `This page is created using 'Static Site Generation'`,
    body: `This text is being returned by 'getStaticProps' `,
    note: `Please note that changing password is not possible right now. `
  }
  return {
    props: {
      titles: titles
    },
  };
};
const ChangePassword = (props: Props) => {
  const [form] = Form.useForm();
  return (
    <>
      <Head>
        <title>Change Password</title>
      </Head>
      <main className={Styles.main}>
        <Image
          src={ChangePasswordImage}
          alt="Change Password"
          placeholder='blur'
          fill
          sizes="100vw"
          className={Styles.background}
        />
        <section className={Styles.section}>
          <ul className={Styles.list}>
            <li>{props.titles.header}</li>
            <li>{props.titles.body}</li>
            <li>{props.titles.note}</li>
          </ul>

          <Form className={Styles.form} form={form} >
            <Form.Item
              label="Password"
              name="password"
              className={Styles.formItem}
              rules={[
                { required: true, message: 'Please enter your new password!' },
              ]}
              hasFeedback
            >
              <Input.Password allowClear={true} />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              className={Styles.formItem}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password allowClear={true} />
            </Form.Item>
            <Button type="primary" htmlType="submit" className={Styles.submitButton}><Link href="/dashboard">Go back to dashboard</Link></Button>

          </Form>

        </section>
      </main>
    </>
  )
}
export default ChangePassword;