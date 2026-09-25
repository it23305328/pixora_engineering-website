// Boilerplate for Cloudinary Image Uploads.
// Replace `YOUR_CLOUD_NAME` and `YOUR_UPLOAD_PRESET` with your actual Cloudinary credentials from the dashboard.

export const uploadImageToCloudinary = async (file) => {
    const url = `https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw error;
    }
};
