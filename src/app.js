const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/stele_latoA_original.jpg'),
    ],
  })
}

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
