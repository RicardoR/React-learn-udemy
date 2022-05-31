import 'setimmediate';
import cloudinary from 'cloudinary';

import { fileUpload } from '../../helpers/fileUpload';
import { cloudName, apiKey, apiSecret } from '../../secret/cloudbinary';

cloudinary.config({
  cloud_name: `${cloudName}`,
  api_key: `${apiKey}`,
  api_secret: `${apiSecret}`,
  secure: true,
});

describe('fileUpload UT', () => {
  test('should load a file and return a secure url', async () => {
    const img = await fetch(
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/Hoja.png'
    );
    const blob = await img.blob();
    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageID = segments[segments.length - 1].replace('.png', '');

    cloudinary.v2.api.delete_resources(`${imageID}`, {}, () => {});
  });

  test('should return an error', async () => {
    const file = new File(['cosa'], 'foto.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
