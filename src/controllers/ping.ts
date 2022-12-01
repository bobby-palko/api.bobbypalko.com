interface PingResponse {
  message: string;
}

const makePingController = () => ({
  getMessage: (): Promise<PingResponse> =>
    new Promise<PingResponse>((resolve) => {
      resolve({
        message: 'pong',
      });
    }),
});

export default makePingController;
