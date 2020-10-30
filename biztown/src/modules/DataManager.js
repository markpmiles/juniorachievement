const remoteURL = "http://localhost:8000";

export default {
  post(tab, obj) {
    return fetch(`${remoteURL}/${tab}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(obj)
    })
  }
}