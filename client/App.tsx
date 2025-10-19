import StudioEditor from '@grapesjs/studio-sdk/react';
import { tableComponent, listPagesComponent, fsLightboxComponent, lightGalleryComponent, swiperComponent, iconifyComponent, accordionComponent, flexComponent, rteTinyMce, layoutSidebarButtons } from '@grapesjs/studio-sdk-plugins';
import '@grapesjs/studio-sdk/style';

export default function App() {
  return (
    <StudioEditor
      options={{
        licenseKey: '48b5b653d07c4001aa27a49c0efea286811fcbcfa35548cc809e07d7aa584609',
      theme: 'dark',
      project: {
        type: 'web'
      },
      assets: {
        storageType: 'self',
        // Provide a custom upload handler for assets
        onUpload: async ({ files }) => {
          const body = new FormData();
          for (const file of files) {
            body.append('files', file);
          }
          const response = await fetch('ASSETS_UPLOAD_URL', { method: 'POST', body });
          const result = await response.json();
          // The expected result should be an array of assets, eg.
          // [{ src: 'ASSET_URL' }]
          return result;
        },
        // Provide a custom handler for deleting assets
        onDelete: async ({ assets }) => {
          const body = JSON.stringify(assets);
          await fetch('ASSETS_DELETE_URL', { method: 'DELETE', body });
        }
      },
      storage: {
        type: 'self',
        // Provide a custom handler for saving the project data.
        onSave: async ({ project }) => {
          throw new Error('Implement your "onSave"!');
          const body = new FormData();
          body.append('project', JSON.stringify(project));
          await fetch('PROJECT_SAVE_URL', { method: 'POST', body });
        },
        // Provide a custom handler for loading project data.
        onLoad: async () => {
          throw new Error('Implement your "onLoad"!');
          const response = await fetch('PROJECT_LOAD_URL');
          const project = await response.json();
          // The project JSON is expected to be returned inside an object.
          return { project };
        },
        autosaveChanges: 100,
        autosaveIntervalMs: 10000
      },
      plugins: [
        tableComponent.init({ /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/table */ }),
        listPagesComponent.init({ /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/listPages */ }),
        fsLightboxComponent.init({ /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/fslightbox */ }),
        lightGalleryComponent.init({ /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/lightGallery */ }),
        swiperComponent.init({ /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/swiper */ }),
        iconifyComponent.init({ /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/iconify */ }),
        accordionComponent.init({ /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/accordion */ }),
        flexComponent.init({ /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/flex */ }),
        rteTinyMce.init({ /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/rte/tinymce */ }),
        layoutSidebarButtons.init({ /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/layout/sidebar-buttons */ })
      ]
      }}
    />
  );
}