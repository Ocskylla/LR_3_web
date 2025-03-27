// BEGIN
const getDomainInfo=(domain)=>{
    let scheme = 'http';
   let name = domain.replace(/^https?:\/\//, '');
    if(domain.startsWith('https://')){
        scheme = 'https';
    }else if(domain.startsWith('http://')){
        scheme = 'http';
    }
    return {scheme, name};
}
export default getDomainInfo;
// END