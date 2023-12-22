import { GM_cookie } from '$';

const etaxDomain = 'etax.jiangsu.chinatax.gov.cn';
const path = '/';
const domain = '.chinatax.gov.cn';


let setDpptCookie = (params) => {
  try {
    setCookieByDocument('SSO_SECURITY_CHECK_TOKEN', params.checkToken, '', path, domain, true)
    setCookieByDocument('dzfp-ssotoken', params.dzfpToken, '', path, domain, true)
    setCookieByDocument('security-token-key', 'dzfp-ssotoken', '', path, domain, false)
  } catch {

  }
}

let setEtaxCookie = (params) => {
  let name = 'SESSION'
  let path = '/portal/'
  if(params.session.includes('TGT-')){
    name = 'CASTGC'
    path = '/sso/'
  }
  setCookieByDocument(name, params.session, '', path, etaxDomain, false)
}

let setCookieByDocument = (name, value, expires, path, domain, secure) => {
  var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
  if (expires instanceof Date) {
    cookieText += '; expires=' + expires;
  }
  if (path) {
    cookieText += '; path=' + path;
  }
  if (domain) {
    cookieText += '; domain=' + domain;
  }
  if (secure) {
    cookieText += '; secure';
  }
  document.cookie = cookieText;
  console.log('Cookie set successfully : ' + name);
}

let setCookiesByGm = (name, value, expires, path, domain, secure) => {
  cookies.forEach((item) => {
    GM_cookie.set({
      url: "etax.jiangsu.chinatax.gov.cn",
      name: name,
      value: value,
      domain: domain,
      path: path,
      secure: secure
    }, function (error) {
      if (error) {
        console.error(error);
      } else {
        console.log('Cookie set successfully : ' + item.name);
      }
    })

  })
}

export {
  setEtaxCookie,
  setDpptCookie
}
