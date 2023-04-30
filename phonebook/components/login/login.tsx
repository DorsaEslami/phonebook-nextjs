/* #region  [- import -] */
import { Form, Row, Col, Input, Button } from "antd";
import { ChangeEvent, useState } from "react"
import Styles from '../../styles/components/login/login.module.scss';
import Notification from "../shared/notification/notification";
/* #endregion */

const Login = (): JSX.Element => {

  const [username, setUsername] = useState<string>("dorsa");
  const [password, setPassword] = useState<string>("dorsa12345");

  const login = () => {
    localStorage.setItem('token', 'dorsa');
    //  navigate("/dashboard");
    Notification({ message: 'Welcome to phonebook app.' });
  }

  return (
    <div className={Styles.container}>
      <Row className={Styles.mainContentRow}>
        <Col md={0} lg={12} xl={12} xxl={11} className={Styles.imageCol}>
          <img src="../img/login.png" alt="login" className={Styles.loginImage} />
        </Col>
        <Col md={0} lg={0} xl={1} xxl={2}></Col>
        <Col md={24} lg={12} xl={11} xxl={11} className={Styles.formCol}>
          <p className={Styles.welcomeTitle}>Welcome to Phonebook app</p>
          <Form className={Styles.form} onFinish={login} >
            <Form.Item
              label="Username"
              name="username"
              initialValue={username}
              rules={[
                { required: true, message: 'Please input your username!' },
                () => ({
                  validator(_, value) {
                    if (value === 'dorsa') {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Username is "dorsa".'));
                  },
                }),
              ]}
              hasFeedback
            >
              <Input allowClear={true} name="username" value={username} onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              initialValue={password}
              rules={[
                { required: true, message: 'Please input your password!' },
                () => ({
                  validator(_, value) {
                    if (value === 'dorsa12345') {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Password is "dorsa12345".'));
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password name="password" value={password} allowClear={true} onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
            </Form.Item>
            <Button type="primary" htmlType="submit" className={Styles.submitButton}>Login</Button>
          </Form>
        </Col>
      </Row>
    </div>

  )
}

export default Login;