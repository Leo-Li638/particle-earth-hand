/**
 * cities.ts
 * ---------------------------------------------------------------------------
 * 深空制图仪 · 城市数据
 *   - CITIES：全球主要城市（中英名 + 经纬度 + 题注 tag）
 *   - FEATURED：轮播题注用的城市（按名字索引，顺序即轮播顺序）
 *   - CATEGORY_LABEL / CATEGORY_COLOR：HUD 焦点分类与地图着色
 * ---------------------------------------------------------------------------
 */

export interface City {
  cn: string
  en: string
  lon: number
  lat: number
  /** 题注第三行（坐标或描述） */
  tag?: string
  /** 是否重点城市（更大的光点与标签） */
  major?: boolean
}

export const CITIES: City[] = [
  /* ---------- 东亚 ---------- */
  { cn: '北京', en: 'BEIJING', lon: 116.4, lat: 39.9, major: true },
  { cn: '上海', en: 'SHANGHAI', lon: 121.47, lat: 31.23, major: true, tag: '31.23°N 121.47°E · 东方明珠' },
  { cn: '广州', en: 'GUANGZHOU', lon: 113.26, lat: 23.13 },
  { cn: '深圳', en: 'SHENZHEN', lon: 114.06, lat: 22.54 },
  { cn: '成都', en: 'CHENGDU', lon: 104.07, lat: 30.57 },
  { cn: '西安', en: "XI'AN", lon: 108.94, lat: 34.34 },
  { cn: '香港', en: 'HONG KONG', lon: 114.17, lat: 22.32, major: true },
  { cn: '台北', en: 'TAIPEI', lon: 121.56, lat: 25.03 },
  { cn: '东京', en: 'TOKYO', lon: 139.69, lat: 35.69, major: true, tag: '35.69°N 139.69°E · 千代田' },
  { cn: '首尔', en: 'SEOUL', lon: 126.98, lat: 37.57, major: true },
  { cn: '新加坡', en: 'SINGAPORE', lon: 103.82, lat: 1.35, major: true, tag: '1.35°N 103.82°E · 赤道城邦' },
  { cn: '曼谷', en: 'BANGKOK', lon: 100.5, lat: 13.75 },
  { cn: '雅加达', en: 'JAKARTA', lon: 106.85, lat: -6.21 },
  { cn: '马尼拉', en: 'MANILA', lon: 120.98, lat: 14.6 },
  { cn: '孟买', en: 'MUMBAI', lon: 72.88, lat: 19.08, major: true },
  { cn: '卡拉奇', en: 'KARACHI', lon: 67.0, lat: 24.86 },
  { cn: '迪拜', en: 'DUBAI', lon: 55.27, lat: 25.2, major: true, tag: '25.20°N 55.27°E · 沙漠之冠' },
  { cn: '德黑兰', en: 'TEHRAN', lon: 51.39, lat: 35.69 },
  { cn: '利雅得', en: 'RIYADH', lon: 46.72, lat: 24.71 },
  { cn: '伊斯坦布尔', en: 'ISTANBUL', lon: 28.98, lat: 41.01, major: true, tag: '41.01°N 28.98°E · 两洲之城' },

  /* ---------- 欧洲 ---------- */
  { cn: '莫斯科', en: 'MOSCOW', lon: 37.62, lat: 55.76, major: true },
  { cn: '伦敦', en: 'LONDON', lon: -0.13, lat: 51.51, major: true, tag: '51.51°N 0.13°W · 格林尼治' },
  { cn: '巴黎', en: 'PARIS', lon: 2.35, lat: 48.86, major: true, tag: '48.86°N 2.35°E · 塞纳河' },
  { cn: '柏林', en: 'BERLIN', lon: 13.4, lat: 52.52 },
  { cn: '罗马', en: 'ROME', lon: 12.5, lat: 41.9 },
  { cn: '马德里', en: 'MADRID', lon: -3.7, lat: 40.42 },
  { cn: '阿姆斯特丹', en: 'AMSTERDAM', lon: 4.9, lat: 52.37 },
  { cn: '斯德哥尔摩', en: 'STOCKHOLM', lon: 18.07, lat: 59.33 },
  { cn: '基辅', en: 'KYIV', lon: 30.52, lat: 50.45 },

  /* ---------- 非洲 ---------- */
  { cn: '开罗', en: 'CAIRO', lon: 31.24, lat: 30.04, major: true },
  { cn: '拉各斯', en: 'LAGOS', lon: 3.38, lat: 6.52 },
  { cn: '内罗毕', en: 'NAIROBI', lon: 36.82, lat: -1.29 },
  { cn: '开普敦', en: 'CAPE TOWN', lon: 18.42, lat: -33.93, major: true },
  { cn: '卡萨布兰卡', en: 'CASABLANCA', lon: -7.59, lat: 33.57 },

  /* ---------- 北美 ---------- */
  { cn: '纽约', en: 'NEW YORK', lon: -74.01, lat: 40.71, major: true, tag: '40.71°N 74.01°W · 曼哈顿' },
  { cn: '旧金山', en: 'SAN FRANCISCO', lon: -122.42, lat: 37.77, major: true, tag: '37.77°N 122.42°W · 金门' },
  { cn: '洛杉矶', en: 'LOS ANGELES', lon: -118.24, lat: 34.05, major: true },
  { cn: '西雅图', en: 'SEATTLE', lon: -122.33, lat: 47.61 },
  { cn: '芝加哥', en: 'CHICAGO', lon: -87.63, lat: 41.88 },
  { cn: '多伦多', en: 'TORONTO', lon: -79.38, lat: 43.65 },
  { cn: '温哥华', en: 'VANCOUVER', lon: -123.12, lat: 49.28 },
  { cn: '墨西哥城', en: 'MEXICO CITY', lon: -99.13, lat: 19.43, major: true },

  /* ---------- 南美 ---------- */
  { cn: '圣保罗', en: 'SÃO PAULO', lon: -46.63, lat: -23.55, major: true },
  { cn: '里约热内卢', en: 'RIO DE JANEIRO', lon: -43.17, lat: -22.91 },
  { cn: '布宜诺斯艾利斯', en: 'BUENOS AIRES', lon: -58.38, lat: -34.6, major: true },
  { cn: '利马', en: 'LIMA', lon: -77.04, lat: -12.05 },

  /* ---------- 大洋洲 ---------- */
  { cn: '悉尼', en: 'SYDNEY', lon: 151.21, lat: -33.87, major: true, tag: '33.87°S 151.21°E · 南十字' },
  { cn: '墨尔本', en: 'MELBOURNE', lon: 144.96, lat: -37.81 },
  { cn: '奥克兰', en: 'AUCKLAND', lon: 174.76, lat: -36.85 },
]

/** 题注轮播顺序（用中文名索引） */
const FEATURED_NAMES = [
  '上海',
  '东京',
  '旧金山',
  '伦敦',
  '伊斯坦布尔',
  '纽约',
  '迪拜',
  '新加坡',
  '悉尼',
  '巴黎',
]

export const FEATURED: number[] = FEATURED_NAMES.map((name) =>
  CITIES.findIndex((c) => c.cn === name),
).filter((i) => i >= 0)

/** 中文名 / 英文名 → 下标 */
export function findCityIndex(key: string): number {
  const k = key.trim().toLowerCase()
  return CITIES.findIndex((c) => c.cn === key.trim() || c.en.toLowerCase() === k)
}

/** 城市经纬度 → 单位向量（lon=0,lat=0 指向 +Z，正对初始相机） */
export function cityDir(city: City): [number, number, number] {
  const lat = (city.lat * Math.PI) / 180
  const lon = (city.lon * Math.PI) / 180
  return [Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon)]
}
