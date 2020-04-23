const getQuery = function() {
  let search = window.location.search.toLocaleLowerCase()
  if(search&&search.indexOf('?') === 0){
    search = search.substring(1,)
    let arr = search.split('&')
    let obj={}
    if(arr&&arr.length){
      arr.forEach(item => {
        obj[item.substring(0,item.indexOf('='))] = item.substring(item.indexOf('=')+1,)
      })
    }
    return obj
  }else{
    return {}
  }
}

export default getQuery