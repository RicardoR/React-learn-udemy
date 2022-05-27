import { cloudBinaryUrl, cloudBinayPreset } from '../secret/cloudbinary';

export const fileUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloudBinayPreset);

  try {
    const resp = await fetch(cloudBinaryUrl, {
      method: 'POST',
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
};
