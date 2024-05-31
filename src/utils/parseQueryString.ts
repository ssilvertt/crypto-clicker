export const parseQueryString = (str: string) => {
    const urlParams = new URLSearchParams(str);
    const obj = Object.fromEntries(urlParams);
    
    obj.user = JSON.parse(obj.user);
    
    return obj;
};