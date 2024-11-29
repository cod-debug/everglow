export async function commonDataLoader(){
    const lang = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')).code :  JSON.parse(localStorage.getItem('defaultLang')) ? JSON.parse(localStorage.getItem('defaultLang')).code : 'en';

    const regionResponse = await fetch(`./content/${lang}/regions.json`);
    const regionResponseData = await regionResponse.json();
    
    const propertiesResponse = await fetch(`./properties.json`);
    const propertiesResponseData = await propertiesResponse.json();

    const brandingResponse = await fetch(`./content/${lang}/branding.json`);
    const brandingResponseData = await brandingResponse.json();

    return {
        regionData: regionResponseData,
        propertiesData: propertiesResponseData,
        brandingData: brandingResponseData,
    }
}