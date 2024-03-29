/* #region  [- import -] */
import Head from 'next/head'
import { Form, Col, Input, Button } from "antd";
import { useContext, useEffect, useState, } from "react"
import Styles from '../styles/components/login/login.module.scss';
import Notification from "../components/shared/notification/notification";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Image from 'next/image'
import loginImage from '../public/img/login.png'
import { NotificationAPIContext } from '@/contexts/notificationAPI';
import { NotificationInstance } from 'antd/es/notification/interface';
/* #endregion */

const Login = (): JSX.Element => {

  /* #region [- variables -] */
  const router = useRouter();
  const [form] = Form.useForm();
  var [submitButtonText, setSubmitButtonTest] = useState<string>('Sign in');
  const notificationAPI: NotificationInstance | undefined = useContext(NotificationAPIContext);
  /* #endregion */

  /* #region [- setFieldsValue -] */
  useEffect(() => {
    form.setFieldsValue({
      username: 'dorsa97@',
      password: 'dorsa97@'
    })
  }, [])
  /* #endregion */

  /* #region [- login -] */
  const login = async () => {
    setSubmitButtonTest('Processing...');
    var fieldsValue: { username: string, password: String } = form.getFieldsValue();
    const result = await signIn("credentials", {
      username: fieldsValue.username,
      password: fieldsValue.password,
      redirect: false,
    });
    if (result?.status === 200) {
      router.push('/dashboard');
      Notification({ api: notificationAPI, message: 'Welcome to phonebook app.', type: 'success' });
    }
    else {
      setSubmitButtonTest('Sign in');
      Notification({ api: notificationAPI, message: 'Something went wrong!', type: 'error' });
    }
  }
  /* #endregion */

  /* #region [- return -] */
  return (<>
    <Head>
      <title>Login to Phonebook App</title>
    </Head>
    <main className={Styles.main}>
      <section className={Styles.section}>
        <Col xs={0} sm={0} md={0} lg={12} xl={12} xxl={11} className={Styles.imageCol}>
          <Image
            src={loginImage}
            alt='login Image'
            placeholder='blur'
            fill
            sizes="(max-width: 991px) 0vw, 50vw"
          />
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={1} xxl={2}></Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={11} xxl={11} className={Styles.formCol}>
          <p className={Styles.welcomeTitle} role='welcome-title'>Welcome to Phonebook app</p>
          <Button className={Styles.sourceCodeButton} type='link' href='https://github.com/DorsaEslami/phonebook-nextjs' target='_blank'>Source Code</Button>
          <Form className={Styles.form} onFinish={login} form={form} role='login-form'>
            <Form.Item
              label="Username"
              name="username"
              className={Styles.formItem}
              rules={[
                { required: true, message: 'Please input your username!' },
                () => ({
                  validator(_, value) {
                    if (value === 'dorsa97@') {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Username is "dorsa97@".'));
                  },
                }),
              ]}
              hasFeedback
            >
              <Input allowClear={true} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              className={Styles.formItem}
              rules={[
                { required: true, message: 'Please input your password!' },
                () => ({
                  validator(_, value) {
                    if (value === 'dorsa97@') {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Password is "dorsa97@".'));
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password allowClear={true} role='password-textbox' />
            </Form.Item>
            <Button type="primary" htmlType="submit" className={Styles.submitButton}>{submitButtonText}</Button>

          </Form>
        </Col>
      </section>
    </main>
  </>
  )
  /* #endregion */
}

export default Login;
