interface ImportMetaEnv {
  readonly VITE_APP_IS_SANDBOX: boolean;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
