import { OnRpcRequestHandler } from '@metamask/snap-types';


export const onRpcRequest: OnRpcRequestHandler = async ({ origin, request }) => {

  switch (request.method) {
    case 'getAddress':
      return "hello world";
    default:
      throw new Error('Method not found.');
  }
};