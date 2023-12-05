'use client'
import { useEffect } from 'react';

const WhitePaperPage = () => {
    useEffect(() => {
        const openPdfInNewTab = () => {
            // Replace with the actual path to your PDF file
            const pdfUrl = '/white-paper.pdf';

            // Open the PDF in a new tab
            window.open(pdfUrl, '_self');
        };
        // Call the function to open the PDF when the component mounts
        openPdfInNewTab();
    }, []);

    return (
        <div>
            <h1>White Paper</h1>
        </div>
    );
};

export default WhitePaperPage;
