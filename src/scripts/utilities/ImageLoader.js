export default function ImageLoader (rootUrl, _progressCallback, _finishedCallback, _scope) {
  let results = null
  let error = null
  let loading = true
  const chunks = []
  const scope = _scope
  const progressCallBack = _progressCallback
  const finishedCallback = _finishedCallback
  // let controller = null; // We will get to this variable in a second

  const loadImage = async (path, options) => {
    try {
      const response = await fetch(path, { ...options })

      if (response.status >= 200 && response.status < 300) {
        results = await readBodyResponse(response)

        const bb = new Blob([new Uint8Array(results)])
        const objectURL = URL.createObjectURL(bb)
        console.log(objectURL)
        return objectURL
      } else {
        throw new Error('error', response.statusText)
      }
    } catch (err) {
      error = err
      results = null
      return error
    } finally {
      loading = false
    }
  }

  const readBodyResponse = async (response) => {
    const reader = response.body.getReader()
    const length = +response.headers.get('content-length')
    // Declare received as 0 initially
    let received = 0

    // Loop through the response stream and extract data chunks
    while (loading) {
      const { done, value } = await reader.read()
      const payload = { detail: { received, length, loading, rootUrl }, scope }

      if (done) {
        // Finish loading
        loading = false

        // Fired when reading the response body finishes
        finishedCallback(payload)
      } else {
        // Push values to the chunk array
        chunks.push(value)
        received += value.length

        // Fired on each .read() - progress tick
        progressCallBack(payload, scope)
      }
    }

    // Concat the chinks into a single array
    const body = new Uint8Array(received)
    let position = 0

    // Order the chunks by their respective position
    for (const chunk of chunks) {
      body.set(chunk, position)
      position += chunk.length
    }

    // Decode the response and return it
    return body
  }

  return { loadImage }
}
