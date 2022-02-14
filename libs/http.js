function authenticateToken(context) {
  const { profile, setProfile } = context;

  if (profile !== null) {
    const isValid = profile.expiry > Date.now()
    let token = profile.accessToken
  
    if (!isValid) {
      token = fetch("/api/auth/refresh",
      {
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${profile.accessToken}`
        },
        method: "POST",
        body: JSON.stringify({
          refreshToken: profile.refreshToken
        })
      })
        .then((response) => response.json())
        .then((result) => {
          setProfile(result)
          return result.accessToken
        })
    }
  
    return token;
  }
}

const Http = {
  get: async (endpoint, obj, context) => {
    
    const token = await authenticateToken(context)

    const params = new URLSearchParams(obj).toString()

    const url = obj ? `${endpoint}?${params}` : endpoint
    return fetch(url,
      {
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        // params: params
      })
        .then((response) => response.json())
        .then((data) => {
          return data
        })
  },

  post: async (endpoint, body, context) => {

    const token = await authenticateToken(context)

    return fetch(endpoint,
    {
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      method: "POST",
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((data) => {
        return data
      })
  },

  login: (endpoint, body) => {
    return fetch(endpoint,
    {
      headers: {
        'content-type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((data) => {
        return data
      })
  }
}

export default Http;