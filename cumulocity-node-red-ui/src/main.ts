import './i18n';

const barHolder: HTMLElement | null =
  document.querySelector('body > .init-load');
export const removeProgress = () =>
  barHolder?.parentNode?.removeChild(barHolder);

applicationSetup();

async function applicationSetup() {
  const { loadMetaDataAndPerformBootstrap } = await import('@c8y/bootstrap');
  const loadBootstrapModule = () =>
    import(
      /* webpackPreload: true */
      './bootstrap'
    );

  loadMetaDataAndPerformBootstrap(loadBootstrapModule).then(removeProgress);
}
