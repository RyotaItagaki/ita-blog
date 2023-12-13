import { createClient } from 'microcms-js-sdk';
import { Content } from '../types';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// 記事一覧
export const getList = async () => {
  const data = await client.getList<Content>({
    endpoint: 'blogs',
  });

  return data;
};

// 記事詳細
export const getDetail = async (contentId: string) => {
  const data = await client.get<Content>({
    endpoint: 'blogs',
    contentId,
  });

  return data;
};