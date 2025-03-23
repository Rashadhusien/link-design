module.exports = {
  compress: true,
  images: {
    domains: ["res.cloudinary.com"], // Allow Cloudinary images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    formats: ["image/avif", "image/webp"], // Use modern formats
  },
};
