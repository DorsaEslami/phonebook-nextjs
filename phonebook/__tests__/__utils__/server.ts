import { rest, DefaultBodyType, PathParams, RestRequest, ResponseComposition, RestContext, ResponseTransformer, } from 'msw'
import { setupServer } from 'msw/node'


type Req = RestRequest<never, PathParams<string>> | RestRequest<DefaultBodyType>;
type Res = ResponseComposition<DefaultBodyType>;
type MockedResponse = ResponseTransformer<DefaultBodyType, any>;
export interface HandlerConfig {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  res: (req: Req, res: Res, ctx: RestContext) => MockedResponse;
}

export function createServer(handlerConfig: HandlerConfig[]) {
  const handlers = handlerConfig.map((config: HandlerConfig) => {
    return rest[config.method || 'get'](config.path, (req, res, ctx) => {
      return res(config.res(req, res, ctx));
    });
  });
  const server = setupServer(...handlers);

  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });
}

