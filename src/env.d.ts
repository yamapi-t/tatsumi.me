/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "@pagefind/default-ui" {
  declare class PagefindUI {
    constructor(opts: {
      element?: string | HTMLElement;
      bundlePath?: string;
      pageSize?: number;
      resetStyles?: boolean;
      showImages?: boolean;
      showSubResults?: boolean;
      excerptLength?: number;
      processResult?: unknown;
      processTerm?: unknown;
      showEmptyFilters?: boolean;
      debounceTimeoutMs?: number;
      mergeIndex?: unknown;
      translations?: unknown;
      autofocus?: boolean;
      sort?: unknown;
    });
  }
}
