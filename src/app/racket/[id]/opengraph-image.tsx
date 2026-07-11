import { ImageResponse } from 'next/og';
import { getRacketMetadataById } from '@/services/get-racket-metadata-by-id';

export const alt = 'Теннисная ракетка';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const ACCENT = '#f97316';
const BG = '#0a0a0a';

async function loadFont(text: string): Promise<ArrayBuffer | null> {
  const url = `https://fonts.googleapis.com/css2?family=Roboto:wght@700&text=${encodeURIComponent(
    text,
  )}`;
  try {
    const css = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0)' },
    }).then((res) => res.text());
    const src = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1];
    if (!src) return null;
    const font = await fetch(src);
    return font.ok ? await font.arrayBuffer() : null;
  } catch {
    return null;
  }
}

function formatPrice(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data } = await getRacketMetadataById(id);

  if (!data) {
    const text = 'Ракетка не найдена';
    const font = await loadFont(text);
    return new ImageResponse(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: BG,
          color: 'white',
          fontSize: 64,
        }}
      >
        {text}
      </div>,
      {
        ...size,
        fonts: font ? [{ name: 'Roboto', data: font, weight: 700 }] : undefined,
      },
    );
  }

  const price = `${formatPrice(data.price)} ₽`;
  const font = await loadFont(`${data.name} ${price}`);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        background: BG,
        color: 'white',
        fontFamily: 'Roboto',
        padding: 72,
        gap: 56,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 32 }}>
        <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
          {data.name}
        </div>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: ACCENT }}>{price}</div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 420,
          background: 'white',
          borderRadius: 24,
          padding: 32,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.imageUrl}
          alt={data.name}
          width={356}
          height={422}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>,
    {
      ...size,
      fonts: font ? [{ name: 'Roboto', data: font, weight: 700 }] : undefined,
    },
  );
}
