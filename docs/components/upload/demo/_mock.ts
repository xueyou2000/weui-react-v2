import { delay } from 'roadhog-api-doc';

export default delay(
  {
    'POST /upload': {
      code: 0,
      filekey: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    },
    'POST /upload2': {
      code: 999,
    },
    'POST /upload3': (req: any, res: any) => {
      return res.json({
        code: Math.random() >= 0.6 ? 0 : 999,
        filekey: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
      });
    },
  },
  1000,
);
