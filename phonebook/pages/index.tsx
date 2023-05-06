/* #region  [- import -] */
import Head from 'next/head'
import { Form, Layout, Col, Input, Button } from "antd";
import { useEffect, } from "react"
import Styles from '../styles/components/login/login.module.scss';
import Notification from "../components/shared/notification/notification";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
/* #endregion */

const Login = (): JSX.Element => {

  /* #region [- variables -] */
  const router = useRouter();
  const [form] = Form.useForm();
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
    // const contactService: IContactService = container.get<IContactService>(TYPES.IContactService);
    // var response: LoginOutputDTO = await contactService.login();
    // if (response.token) {
    //   localStorage.setItem('token', response.token);
    //   router.push('/dashboard');
    //   Notification({ message: 'Welcome to phonebook app.' });
    // }
    // else {
    //   Notification({ message: 'Something went wrong!', type: 'error' });
    // }
    var fieldsValue: { username: string, password: String } = form.getFieldsValue();
    const result = await signIn("credentials", {
      username: fieldsValue.username,
      password: fieldsValue.password,
      redirect: true,
      callbackUrl: '/dashboard'
    });
    // console.log('result', result)
    if (result) {
      Notification({ message: 'Welcome to phonebook app.' });
    }
    else {
      Notification({ message: 'Something went wrong!', type: 'error' });
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
        <Col md={0} lg={12} xl={12} xxl={11} className={Styles.imageCol}>
          <img src="../img/login.png" alt="login" className={Styles.loginImage} />
        </Col>
        <Col md={0} lg={0} xl={1} xxl={2}></Col>
        <Col md={24} lg={12} xl={11} xxl={11} className={Styles.formCol}>
          <p className={Styles.welcomeTitle}>Welcome to Phonebook app</p>
          <Form className={Styles.form} onFinish={login} form={form}  >
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
              <Input.Password allowClear={true} />
            </Form.Item>
            <Button type="primary" htmlType="submit" className={Styles.submitButton}>Login</Button>

          </Form>
        </Col>
      </section>
    </main>
  </>
  )
  /* #endregion */
}

export default Login;
