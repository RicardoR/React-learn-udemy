import { fileUpload } from '../../helpers/fileUpload';

describe('fileUpload UT', () => {
  test('should load a file and return a secure url', async () => {
    const img = await fetch(
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/Hoja.png'
    );
    const blob = await img.blob();
    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);

    expect(typeof url).toBe('string');
  });

  test('should return an error', async () => {
    const file = new File(['cosa'], 'foto.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
