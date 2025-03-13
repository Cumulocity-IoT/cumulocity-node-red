import './i18n';
import { applyOptions, loadOptions } from '@c8y/bootstrap';

const barHolder: HTMLElement | null = document.querySelector('body > .init-load');
export const removeProgress = () => barHolder?.parentNode?.removeChild(barHolder);

applicationSetup();

async function applicationSetup() {
  await applyOptions({
    ...(await loadOptions())
  });

  const mod = await import(
    /* webpackPreload: true */
    './bootstrap'
  );
  const bootstrapApp = mod.bootstrap;
  return bootstrapApp().then(removeProgress);
}
