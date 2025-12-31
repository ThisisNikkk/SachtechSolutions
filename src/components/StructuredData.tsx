import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData: React.FC = () => {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Solario Tech',
        legalName: 'Solario Tech Pvt. Ltd.',
        url: 'https://solariotech.com',
        logo: 'https://solariotech.com/favicon.ico',
        foundingDate: '2020',
        description: 'Leading software development and technology solutions company specializing in mobile app development, web development, AI, IoT, and cloud solutions.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'C-86, Phase 7, Industrial Area, Sector 74',
            addressLocality: 'Sahibzada Ajit Singh Nagar',
            addressRegion: 'Punjab',
            postalCode: '160055',
            addressCountry: 'IN',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-7087425488',
            contactType: 'Customer Service',
            email: 'contact@solariotech.com',
            availableLanguage: 'English',
        },
        sameAs: [
            'https://www.facebook.com/solariotechglobal/',
            'https://www.instagram.com/solariotechglobal/',
            'https://www.linkedin.com/company/sachtech-solution-private-limited',
            'https://youtube.com/@solariotech',
        ],
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Solario Tech',
        url: 'https://solariotech.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://solariotech.com/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
        },
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://solariotech.com',
        name: 'Solario Tech',
        image: 'https://solariotech.com/og-image.jpg',
        telephone: '+91-7087425488',
        email: 'contact@solariotech.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'C-86, Phase 7, Industrial Area, Sector 74',
            addressLocality: 'Sahibzada Ajit Singh Nagar',
            addressRegion: 'Punjab',
            postalCode: '160055',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 30.7046,
            longitude: 76.7179,
        },
        url: 'https://solariotech.com',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '11:00',
                closes: '20:00',
            },
        ],
        priceRange: '$$',
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
