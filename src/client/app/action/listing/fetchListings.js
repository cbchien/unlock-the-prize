import fetch from 'isomorphic-fetch'

export function fetchListings(keyword='') {
  return dispatch => {
    // add redux dispatch() here
    console.log(keyword)
    let api = `/api/listing`
    return fetch(api)
      .then(response => console.log(response.json())
        // .then(data => {
        //     console.log(data)
        //     return {
        //         data: data,
        //         status: response.status,
        //     }
        // }
        // )
      )
    //   .then(res => {
    //     console.log('Status: ',res.status, 'JSON: ',res.data)
    //     // add redux dispatch() here
    //     })
      .catch(error => {
      return error;
      console.log('api error')
    })
  }
}