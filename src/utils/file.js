export const downloadFile = async (fileId, filename) => {
    const response = await fetch(`/api/file/${fileId}`, { method: "GET" })
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    window.URL.revokeObjectURL(url)
}