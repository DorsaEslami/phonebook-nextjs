import * as nextAuthReact from 'next-auth/react';

const mockedNextAuthReact = nextAuthReact as jest.Mocked<typeof nextAuthReact>;
export const SuccessfulSignIn = () => {
  mockedNextAuthReact.signIn.mockResolvedValue({ error: undefined, status: 200, ok: true, url: '' });

}
export const FailedSignIn = () => {
  mockedNextAuthReact.signIn.mockResolvedValue({ error: '400 error', status: 400, ok: false, url: '' });

}