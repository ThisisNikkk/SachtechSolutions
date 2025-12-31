import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonicalUrl?: string;
    structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
    title = 'Solario Tech - Leading Software Development & Technology Solutions Company',
    description = 'Solario Tech delivers cutting-edge software solutions including mobile app development, web development, AI, IoT, cloud solutions, and digital transformation services. Transform your business with innovation.',
    keywords = 'software development, mobile app development, web development, AI solutions, IoT, cloud computing, digital transformation, technology consulting, custom software, Solario Tech',
    ogImage = 'https://solariotech.com/og-image.jpg',
    ogType = 'website',
    canonicalUrl,
    structuredData,
}) => {
    const currentUrl = canonicalUrl || `https://solariotech.com${window.location.pathname}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Canonical URL */}
            <link rel="canonical" href={currentUrl} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
