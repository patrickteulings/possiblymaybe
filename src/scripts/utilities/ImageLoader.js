export default function ImageLoader (rootUrl, _progressCallback, _finishedCallback) {
  let results = null
  let error = null
  let loading = true
  const chunks = []
  const progressCallBack = _progressCallback
  const finishedCallback = _finishedCallback
  // let controller = null; // We will get to this variable in a second

  const json = async (path, options) => {
    try {
      const response = await fetch(path, { ...options })

      if (response.status >= 200 && response.status < 300) {
        results = await _readBody(response)

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

  const _readBody = async (response) => {
    const reader = response.body.getReader()
    const length = +response.headers.get('content-length')
    // Declare received as 0 initially
    let received = 0

    // Loop through the response stream and extract data chunks
    while (loading) {
      const { done, value } = await reader.read()
      const payload = { detail: { received, length, loading, rootUrl } }
      // const onProgress = new CustomEvent('fetch-progress', payload)
      // const onFinished = new CustomEvent('fetch-finished', payload)

      if (done) {
        // Finish loading
        loading = false

        // Fired when reading the response body finishes
        // window.dispatchEvent(onFinished)
        finishedCallback(payload)
      } else {
        console.log('value.length', value.length)
        // Push values to the chunk array
        chunks.push(value)
        received += value.length

        // Fired on each .read() - progress tick
        // window.dispatchEvent(onProgress)
        progressCallBack(payload)
      }
    }

    // Concat the chinks into a single array
    let body = new Uint8Array(received) // eslint-disable-line
    let position = 0

    // Order the chunks by their respective position
    for (const chunk of chunks) {
      body.set(chunk, position)
      position += chunk.length
    }

    // Decode the response and return it
    return body
  }

  return { json }
}
