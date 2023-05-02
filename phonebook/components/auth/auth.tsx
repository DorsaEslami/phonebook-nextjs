import { useRouter } from "next/router";

type Props = {
  children: JSX.Element
}

const Auth = ({ children }: Props): JSX.Element | null => {
  const router = useRouter()
  let token = localStorage.getItem('token');
  if (token === null) {
    router.push('/');
    return null;
  }
  else {
    return (children)
  }

}
export default Auth;