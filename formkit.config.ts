import type { DefaultConfigOptions } from '@formkit/vue';
import { createAutoAnimatePlugin, createAutoHeightTextareaPlugin } from '@formkit/addons';

const config: DefaultConfigOptions = {
  plugins: [createAutoAnimatePlugin(), createAutoHeightTextareaPlugin()],
};

export default config;
