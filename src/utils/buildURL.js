import qs from 'qs'

/**
 * builds urls for API's that may take inputs
 */
export function buildURL(url, params){
  if(params == null) return url //defaults to url input
  let serializedParams = qs.stringify(params)
  if(!serializedParams) return url //returns url if serialization fails

  return `${url}${url.indexOf('?') < 0 ? '?' : '&'}${serializedParams}`;
}

export function parseQueryString(queryStrings){
  let search
  if(queryStrings != null){
    search = queryStrings;
  }
  else {
    return queryStrings;
  }
  return qs.parse(search { ignoreQueryPrefix: true} )
}
