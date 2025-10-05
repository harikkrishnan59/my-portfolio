import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestAOS = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init();

        // Function to check will-change property
        const checkWillChange = () => {
            const aosElements = document.querySelectorAll('[data-aos]');
            
            console.log(`Found ${aosElements.length} elements with data-aos`);
            
            aosElements.forEach((element, index) => {
                element.style.border = '2px dashed red';
                
                const computedStyle = window.getComputedStyle(element);
                const willChange = computedStyle.getPropertyValue('will-change');
                
                console.log(`Element ${index + 1}:`, {
                    'data-aos': element.getAttribute('data-aos'),
                    'will-change': willChange,
                    'element': element.tagName,
                    'classes': element.className
                });
            });
        };

        // Run the check after AOS has initialized
        setTimeout(checkWillChange, 100);
    }, []);

    return (
        <>
            <style>
                {`
                    [data-aos] {
                        will-change: transform, opacity !important;
                    }
                `}
            </style>

            {/* You can add elements here to test them */}
            <div className="h-screen flex items-center justify-center">
                <h1 data-aos="fade-up" className="text-white text-4xl">Testing AOS</h1>
            </div>
        </>
    );
};

export default TestAOS;