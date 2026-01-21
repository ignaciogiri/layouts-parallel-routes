// Typed route helpers for Next.js App Router

type RouteParams = {
  "/(site)/@headerLeft/[[...slug]]": { slug?: string[] }
  "/(site)/@headerCenter/[[...slug]]": { slug?: string[] }
  "/(site)/@headerRight/[[...slug]]": { slug?: string[] }
  "/(site)/[[...slug]]": { slug?: string[] }
}

export type PageProps<T extends keyof RouteParams> = {
  params: Promise<RouteParams[T]>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export type LayoutProps<T extends keyof RouteParams> = {
  params: Promise<RouteParams[T]>
  children: React.ReactNode
}
